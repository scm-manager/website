import React, { FC, ReactNode, useState } from "react";
import { graphql, Link } from "gatsby";
import { Apple, Freebsd, Linux, Windows } from "@icons-pack/react-simple-icons";
import styled from "styled-components";
import Changes from "./Changes";

type Package = {
  type: string;
  os?: string;
  arch?: string;
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

type PackageDownloadProps = Package & {
  icon: ReactNode;
  title: string;
  description: string;
  instructions?: string;
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

const PackageDownload: FC<PackageDownloadProps> = ({
  icon,
  title,
  description,
  type,
  os,
  arch,
  url,
  checksum,
  instructions,
}) => (
  <article className="media">
    <figure className="media-left has-text-centered">
      <p className="image">{icon}</p>
    </figure>
    <div className="media-content">
      <div className="content">
        <h5 id={`${type}-${os}`}>
          {title} ({arch}, {type}):
        </h5>
        <p>{description}</p>
        {checksum && <Checksum checksum={checksum} />}
        <div className="field is-grouped">
          {url && <Button color="primary" href={url} label="Download" />}
          {instructions && (
            <Button
              color="info"
              href={instructions}
              label="Installation instructions"
            />
          )}
        </div>
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

const getOsBlock = (os: string) => {
  const size = "3em";
  switch (os) {
    case "windows":
      return {
        icon: <Windows size={size} />,
        title: "Windows users",
        description: "-",
      };
    case "linux":
      return {
        icon: <Linux size={size} />,
        title: "Linux users",
        description: "-",
      };
    case "darwin":
      return {
        icon: <Apple size={size} />,
        title: "Darwin users",
        description: "-",
      };
    case "freebsd":
      return {
        icon: <Freebsd size={size} />,
        title: "FreeBSD users",
        description: "-",
      };
    case "homebrew":
      return {
        icon: <Apple size={size} />,
        title: "Homebrew users",
        description: "-",
      };
    case "scoop":
      return {
        icon: <Windows size={size} />,
        title: "Windows users",
        description: "-",
      };
    default:
      return {
        icon: null,
        title: "Other?",
        description: "-",
      };
  }
};



const ArchitectureSwitch: FC = ({ packages, setSelectedArch }) => (
  <div className="toggles">
    {packages
      .map(e => e.arch)
      .filter((i, index, self) => self.indexOf(i) === index)
      .map(arch => (
        <>
          <input type="radio" id={arch} onClick={() => setSelectedArch(arch)} />
          <label for={arch}>{arch}</label>
        </>
      ))}
  </div>
);

type TableOfContentsProps = {
  packages: PackageDownloadProps[];
  versionLog: any;
};

const TableOfContents: FC<TableOfContentsProps> = ({
  packages,
  versionLog,
}) => (
  <div className="content">
    <ul>
      <li>
        <a href="#packages">Packages</a>
        <ul>
          {packages.map(pkg => (
            <li key={`${pkg.type}-${pkg.os}`}>
              <a href={`#${pkg.type}-${pkg.os}`} title={pkg.description}>
                {pkg.title} ({pkg.type})
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

const DownloadCli: FC<DownloadProps> = ({ release, changelog }) => {
  const [selectedArch, setSelectedArch] = useState("amd64");

  const props = release.packages
    .map(pkg => getOsBlock(pkg.os))
    .filter(p => !!p);
  //.sort((a, b) => a.type.localeCompare(b.type));

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
      <TableOfContents packages={props} versionLog={versionLog} />
      <h3 className="title is-5" id="packages">
        Packages
      </h3>
      {props.map(p => (
        <>
          <ArchitectureSwitch packages={release.packages} setSelectedArch={setSelectedArch} />
          <PackageDownload key={p.type} {...p} />
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
