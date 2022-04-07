import React, { FC, ReactNode, useState } from "react";
import { graphql, Link } from "gatsby";
import { Apple, Freebsd, Linux, Windows } from "@icons-pack/react-simple-icons";
import styled from "styled-components";
import Changes from "./Changes";

type Package = {
  type: string;
  os: string;
  arch: string;
  url?: string;
  checksum?: string;
};

const Checksum = ({ checksum }) => {
  if (checksum) {
    return (
      <p>
        <small>
          <strong>Checksum (SHA256):</strong>
        </small>
        <br />
        <small className="ellipsis-overflow">{checksum}</small>
      </p>
    );
  }
  return null;
};

type ButtonProps = {
  color: string;
  href: string;
  label: string;
};

const Button: FC<ButtonProps> = ({ color, href, label }) => (
  <p className="control">
    <a className={`button is-${color} is-outlined`} href={href}>
      {label}
    </a>
  </p>
);

const PackageDownload: FC<OsPackage> = ({
  icon,
  title,
  description,
  os,
  instructions,
  packages,
}) => (
  <article className="media">
    <figure className="media-left has-text-centered">
      <p className="image">{icon}</p>
    </figure>
    <div className="media-content">
      <div className="content">
        <h5 id={os}>{title}:</h5>
        <p>{description}</p>
        {/*TABLE*/}
        {/*{checksum && <Checksum checksum={checksum} />}*/}
        {/*<div className="field is-grouped">*/}
        {/*  /!*{url && <Button color="primary" href={url} label="Download" />}*!/*/}
        {/*  {instructions && (*/}
        {/*    <Button*/}
        {/*      color="info"*/}
        {/*      href={instructions}*/}
        {/*      label="Installation instructions"*/}
        {/*    />*/}
        {/*  )}*/}
        {/*</div>*/}
      </div>
    </div>
  </article>
);

const createDocBaseUrl = (version: string) => {
  const parts = version.split(".");
  const major = parts[0];
  if (major === "1") {
    return `/docs/1.x/en`;
  } else {
    const minor = parts[1];
    return `/docs/${major}.${minor}.x/en`;
  }
};

const createDefaultInstructionUrl = (version: string, type: string) => {
  return `${createDocBaseUrl(version)}/installation/${type}/`;
};

const createProps = (os: string) => {
  const size = "3em";
  switch (os) {
    case "windows":
      return {
        icon: <Windows size={size} />,
        title: "Windows users",
        description: "-",
        os,
      };
    case "linux":
      return {
        icon: <Linux size={size} />,
        title: "Linux users",
        description: "-",
        os,
      };
    case "darwin":
      return {
        icon: <Apple size={size} />,
        title: "Darwin users",
        description: "-",
        os,
      };
    case "freebsd":
      return {
        icon: <Freebsd size={size} />,
        title: "FreeBSD users",
        description: "-",
        os,
      };
    default:
      return {
        icon: null,
        title: "Other?",
        description: "-",
        os,
      };
  }
};

const ArchitectureSwitch: FC<{
  packages: Package[];
  selectedArch: string;
  setSelectedArch: (arch: string) => void;
}> = ({ packages, selectedArch, setSelectedArch }) => (
  <div className="control">
    {packages
      .map(e => e.arch)
      .filter((i, index, self) => self.indexOf(i) === index)
      .map((arch, index) => (
        <label key={index} className="radio">
          <input
            type="radio"
            name={arch}
            onClick={() => setSelectedArch(arch)}
            checked={selectedArch === arch}
          />
          {arch}
        </label>
      ))}
  </div>
);

type TableOfContentsProps = {
  packagesByOs: PackagesByOs;
  versionLog: any;
};

const TableOfContents: FC<TableOfContentsProps> = ({
  packagesByOs,
  versionLog,
}) => {
  return (
    <div className="content">
      <ul>
        <li>
          <a href="#packages">Packages</a>
          <ul>
            {Object.values(packagesByOs).map((osPackage: OsPackage) => (
              <li key={osPackage.os}>
                <a href={`#${osPackage.os}`} title={osPackage.description}>
                  {osPackage.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
        {versionLog && (
          <li>
            <a href="#changelog">Changelog</a>
          </li>
        )}
      </ul>
    </div>
  );
};

type ChangelogProps = {
  versionLog: any;
};

const ChangelogContainer = styled.div`
  margin-top: 2rem;
`;

const Changelog: FC<ChangelogProps> = ({ versionLog }) => {
  if (!versionLog) {
    return null;
  }
  return (
    <ChangelogContainer>
      <h3 className="title is-5" id="changelog">
        Changelog
      </h3>
      <Changes content={versionLog.changes.html} />
    </ChangelogContainer>
  );
};

type DownloadProps = {
  release: any;
  changelog: any;
};

type OsPackage = {
  icon: ReactNode;
  title: string;
  description: string;
  os: string;
  instructions?: string;
  packages: Package[];
};

type PackagesByOs = Record<string, OsPackage>;

const DownloadCli: FC<DownloadProps> = ({ release, changelog }) => {
  const [selectedArch, setSelectedArch] = useState("amd64");

  const packagesByOs: PackagesByOs = {};
  release.packages
    .filter(p => p.arch === selectedArch)
    .forEach(pkg => {
      let packages: Package[] = packagesByOs[pkg.os]?.packages || [];
      packages.push(pkg);
      packagesByOs[pkg.os] = { ...createProps(pkg.os), packages };
    });

  Object.keys(packagesByOs).forEach(os => {
    release.packages
      .filter(p => p.arch === selectedArch && p.os === os)
      .forEach(p => {
        let osPackage = packagesByOs[os];
        osPackage?.packages?.push(p);
      });
  });

  const versionLog = changelog.versions.find(v => v.tag === release.tag);
  return (
    <>
      <h2 className="title is-4">
        {release.tag} - ({release.date})
      </h2>
      <p>
        If you are looking for an other CLI version, please have a look at the{" "}
        <Link to="/cli/archive">archive</Link>.
      </p>
      <TableOfContents packagesByOs={packagesByOs} versionLog={versionLog} />
      <h3 className="title is-5" id="packages">
        Packages
      </h3>
      {Object.values(packagesByOs).map(p => (
        <>
          <ArchitectureSwitch
            packages={release.packages}
            selectedArch={selectedArch}
            setSelectedArch={setSelectedArch}
          />
          <PackageDownload key={p.os} {...p} />
        </>
      ))}
      <Changelog versionLog={versionLog} />
    </>
  );
};

export const fragments = graphql`
  fragment DownloadCliReleaseFragment on ReleasesYaml {
    tag
    date(formatString: "Y-MM-DD")
    packages {
      type
      os
      arch
      url
      checksum
    }
  }

  fragment DownloadCliChangelogFragment on ChangelogVersions {
    tag
    changes {
      html
    }
  }
`;

export default DownloadCli;
