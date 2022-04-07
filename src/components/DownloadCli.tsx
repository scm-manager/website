import React, { FC, ReactNode, useState } from "react";
import { graphql, Link } from "gatsby";
import { Apple, Freebsd, Linux, Windows } from "@icons-pack/react-simple-icons";
import styled from "styled-components";
import Changes from "./Changes";
import classNames from "classnames";

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
  className?: string;
};

const Button: FC<ButtonProps> = ({ color, href, label, className }) => (
  <p className="control">
    <a className={`button is-${color} is-outlined ${className}`} href={href}>
      {label}
    </a>
  </p>
);

const PackageDownloadGroup: FC<{ release: any }> = ({ release }) => {
  const [selectedArch, setSelectedArch] = useState("amd64");

  const packagesByOs: PackagesByOs = {};
  release.packages
    .filter(p => p.arch === selectedArch)
    .sort((a, b) => a.os.localeCompare(b.os))
    .forEach(pkg => {
      const packages = packagesByOs[pkg.os]?.packages || [];
      packages?.push(pkg);
      packagesByOs[pkg.os] = { ...createProps(pkg.os), packages };
    });

  return (
    <>
      <div className="is-flex is-flex-direction-row is-justify-content-space-between">
        <h3 className="title is-5" id="packages">
          Packages
        </h3>
      </div>

      {Object.values(packagesByOs).map(osPackage => (
        <>
          <ArchitectureSwitch
            packages={release.packages}
            selectedArch={selectedArch}
            setSelectedArch={setSelectedArch}
          />{" "}
          <PackageDownload
            key={osPackage.os}
            version={release.tag}
            {...osPackage}
          />
        </>
      ))}
    </>
  );
};

const PackageDownload: FC<OsPackage & {
  version: string;
}> = ({ icon, title, description, os, packages, version }) => {
  return (
    <article className="media">
      <figure className="media-left has-text-centered">
        <p className="image">{icon}</p>
      </figure>
      <div className="media-content">
        <div className="content">
          <h5 id={os}>{title}:</h5>
          <p>{description}</p>
          <div className="is-flex is-justify-content-end mb-2">
            <Button
              color="info"
              href={createDefaultInstructionUrl(version, os)}
              label="Installation instructions"
            />
          </div>

          <table className="table is-striped is-fullwidth">
            <tbody>
              {packages.map(pkg => (
                <tr key={pkg.type}>
                  <th>{pkg.type}</th>
                  <td className="has-text-centered">
                    <Checksum checksum={pkg.checksum} />
                  </td>
                  <td className="has-text-right">
                    {pkg.url && (
                      <Button color="primary" href={pkg.url} label="Download" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
};

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

const createDefaultInstructionUrl = (version: string, os: string) => {
  return `${createDocBaseUrl(version)}/installation/${os}/`;
};

const createProps = (os: string) => {
  const size = "3em";
  switch (os) {
    case "windows":
      return {
        icon: <Windows size={size} />,
        title: "Windows users",
        description:
          "Download the windows package or follow the instructions to install via scoop.",
        os,
      };
    case "linux":
      return {
        icon: <Linux size={size} />,
        title: "Linux users",
        description:
          "Download the linux package or follow the instructions to install via yum, apt or homebrew.",
        os,
      };
    case "darwin":
      return {
        icon: <Apple size={size} />,
        title: "Darwin users",
        description:
          "Download the darwin package or follow the instructions to install via homebrew.",
        os,
      };
    case "freebsd":
      return {
        icon: <Freebsd size={size} />,
        title: "FreeBSD users",
        description: "Download the freebsd package and follow the instructions.",
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
  <div className="field has-addons">
    {packages
      .map(e => e.arch)
      .sort((a, b) => a.localeCompare(b))
      .filter((i, index, self) => self.indexOf(i) === index)
      .map((arch, index) => (
        <div className="control">
          <input
            type="radio"
            name={arch}
            id={arch}
            onClick={() => setSelectedArch(arch)}
            checked={selectedArch === arch}
            className="is-hidden"
          />
          <label
            key={index}
            onClick={() => setSelectedArch(arch)}
            className={classNames(
              "button",
              "is-link",
              {
                "is-active": selectedArch === arch,
              },
              {
                "is-outlined": selectedArch !== arch,
              }
            )}
            htmlFor={arch}
          >
            {arch.toUpperCase()}
          </label>
        </div>
      ))}
  </div>
);

type TableOfContentsProps = {
  release: any;
  versionLog: any;
};

const TableOfContents: FC<TableOfContentsProps> = ({ release, versionLog }) => {
  const packagesByOs: PackagesByOs = {};
  release.packages
    .sort((a, b) => a.os.localeCompare(b.os))
    .forEach(pkg => {
      packagesByOs[pkg.os] = { ...createProps(pkg.os), packages: [] };
    });
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
  packages: Package[];
};

type PackagesByOs = Record<string, OsPackage>;

const DownloadCli: FC<DownloadProps> = ({ release, changelog }) => {
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
      <TableOfContents release={release} versionLog={versionLog} />

      <PackageDownloadGroup release={release} />
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
