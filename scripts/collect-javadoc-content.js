const path = require("path");
const fs = require("fs");
const logger = require("./logger");
const decompress = require("decompress");
const fetch = require("node-fetch");

async function collectJavadocContent() {
  const url = new URL(
    "https://packages.scm-manager.org/service/rest/v1/search/assets/download"
  );
  const params = new URLSearchParams({
    sort: "version",
    repository: "releases",
    "maven.groupId": "sonia.scm",
    "maven.artifactId": "scm-core",
    "maven.classifier": "javadoc",
    "maven.extension": "jar",
  });
  url.search = params.toString();
  const outPath = path.join(__dirname, "..", "static", "javadoc");
  const jarPath = path.join(outPath, "javadoc.jar");

  logger.info(`Collecting javadoc content...`);

  await fs.promises.mkdir(outPath, { recursive: true });

  const response = await fetch(url.toString());
  if (!response.ok) {
    logger.error(`Failed to download file: ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.promises.writeFile(jarPath, buffer);

  await decompress(jarPath, outPath);
  await fs.promises.unlink(jarPath);
}

module.exports = { collectJavadocContent };
