const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const util = require("util");
const http = require("https");
const crypto = require("crypto");
const yaml = require("js-yaml");

const paths = require("path");

const writeFile = util.promisify(fs.writeFile);

const api = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

const download = url => {
  return new Promise((resolve, reject) => {
  http.get(url, res => {
    if (res.statusCode >= 400) {
      resolve(null);
      return;
    }
    let data = "";
    res.on("data", chunk => {
      data += chunk;
    });
    res.on("err", err => {
      reject(err);
    });
    res.on("end", () => {
      resolve(data.trim());
    });
  });
});
};

const createChecksum = async url => {
  const reference = await download(url + ".sha1");
  return new Promise((resolve, reject) => {
    const sha1 = crypto.createHash("sha1");
    const sha256 = crypto.createHash("sha256");
    http.get(url, res => {
      if (res.statusCode >= 400) {
        resolve(null);
        return;
      }
      res.on("data", chunk => {
        sha1.update(chunk);
        sha256.update(chunk);
      });
      res.on("err", err => {
        reject(err);
      });
      res.on("end", () => {
        const downloaded = sha1.digest("hex").trim().toLowerCase();
        if (reference.toLowerCase() === downloaded) {
          resolve(sha256.digest("hex"));
        } else {
          reject(new Error(`checksum mismatch: ${reference} !== ${downloaded} (${url})`));
        }
      });
    });
  });
};

const createPackage = (type, host, path) => {
  return new Promise(resolve => {
    const options = {
      method: "HEAD",
      host,
      port: 443,
      path,
    };
    const req = http.request(options, res => {
      if (res.statusCode === 200) {
        resolve({
          type,
        });
      } else {
        resolve(null);
      }
    });
    req.end();
  });
};

const createUnixPackage = async tag => {
  const url = `https://packages.scm-manager.org/repository/releases/sonia/scm/scm-server/${tag}/scm-server-${tag}-app.tar.gz`;
  return createDownloadPackage("unix", url);
};

const createWindowsPackage = async tag => {
  const url = `https://packages.scm-manager.org/repository/releases/sonia/scm/scm-server/${tag}/scm-server-${tag}-app.zip`;
  return createDownloadPackage("windows", url);
};

const createRedHatPackage = async tag => {
  return createPackage(
    "redhat",
    "packages.scm-manager.org",
    `/repository/releases/sonia/scm/scm-server/${tag}/scm-server-${tag}-all.rpm`
  );
};

const createDebianPackage = async tag => {
  return createPackage(
    "debian",
    "packages.scm-manager.org",
    `/repository/releases/sonia/scm/scm-server/${tag}/scm-server-${tag}-all.deb`
  );
};

const createWebappPackage = async tag => {
  const url = `https://packages.scm-manager.org/repository/releases/sonia/scm/scm-webapp/${tag}/scm-webapp-${tag}.war`;
  return createDownloadPackage("war", url);
};

const createCliPackage = async tag => {
  const url = `https://packages.scm-manager.org/repository/releases/sonia/scm/clients/scm-cli-client/${tag}/scm-cli-client-${tag}-jar-with-dependencies.jar`;
  return createDownloadPackage("cli", url);
};

const cesVersions = ["48", "49", "50", "51", "53", "54", "55", "60"];

const createCesPackage = async tag => {
  const minor = tag.split(".")[1];
  if (cesVersions.includes(minor)) {
    return {
      type: "ces",
    };
  }
  return null;
};

const createDownloadPackage = async (type, url) => {
  const checksum = await createChecksum(url);
  if (!checksum) {
    return null;
  }
  return {
    type,
    url,
    checksum,
  };
};

const createDockerPackage = tag => {
  return createPackage(
    "docker",
    "hub.docker.com",
    `/v2/repositories/sdorra/scm-manager/tags/${tag}`
  );
};

const collectPackages = tag => {
  return Promise.all([
    createCesPackage(tag),
    createUnixPackage(tag),
    createWindowsPackage(tag),
    createRedHatPackage(tag),
    createDebianPackage(tag),
    createWebappPackage(tag),
    createDockerPackage(tag),
    createCliPackage(tag),
  ]);
};

const createReleaseYaml = async (tag, date) => {

  const yamlPath = paths.join(
    process.cwd(),
    "content",
    "releases",
    tag.replace(".", "-") + ".yaml"
  );

  if (!fs.existsSync(yamlPath)) {
    console.log(`... create release for ${tag}`);
    const packages = await collectPackages(tag);
  
    const release = yaml.safeDump({
      tag,
      date,
      packages: packages.filter(p => !!p),
    });
  
    await writeFile(
      yamlPath,
      release,
      { encoding: "utf8" }
    );
  } else {
    console.log(`... skip release ${tag}, because release desciptor is already written`);
  }
};

const createReleaseYamls = async () => {
  const tags = [];
  for await (const tagList of api.paginate.iterator(api.repos.listTags, {
    owner: "scm-manager",
    repo: "scm-manager",
  })) {
    for (const tag of tagList.data) {
      if (tag.name.startsWith("1")) {
        const commit = await api.repos.getCommit({
          owner: "scm-manager",
          repo: "scm-manager",
          ref: tag.commit.sha,
        });
        await createReleaseYaml(tag.name, commit.data.commit.author.date);
      }
    }
  }
  return tags;
};

createReleaseYamls()
  .then()
  .catch(e => console.error(e));
