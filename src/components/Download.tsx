import React, { FC, ReactNode } from "react";
import { graphql, Link } from "gatsby";
import {
  Linux,
  Redhat,
  Debian,
  Windows,
  Apple,
  Docker,
  Kubernetes,
  Java,
  Gnubash,
} from "@icons-pack/react-simple-icons";
import styled from "styled-components";
import Changes from "../components/Changes";
import CloudoguLogo, { Alignment } from "./CloudoguLogo";

type Package = {
  type: string;
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

type PackageDownloadProps = {
  icon: ReactNode;
  title: string;
  description: string;
  type: string;
  url?: string;
  checksum?: string;
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
  url,
  checksum,
  type,
  instructions,
}) => (
  <article className="media">
    <figure className="media-left has-text-centered">
      <p className="image">{icon}</p>
    </figure>
    <div className="media-content">
      <a id={type}></a>
      <div className="content">
        <h5>{title}:</h5>
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

export const createProps = (
  version: string,
  pkg: Package,
  size: string,
  align?: Alignment
) => {
  switch (pkg.type) {
    case "ces":
      return {
        ...pkg,
        icon: <CloudoguLogo size={size} align={align} />,
        title: "Cloudogu EcoSystem users",
        description: "We provide a Dogu for the Cloudogu EcoSystem.",
        instructions: createDefaultInstructionUrl(version, pkg.type),
      };
    case "debian":
      return {
        ...pkg,
        icon: <Debian size={size} />,
        title: "Debian/Ubuntu users",
        description:
          "You can use our apt repository for Debian based distributions.",
        instructions: createDefaultInstructionUrl(version, pkg.type),
      };
    case "redhat":
      return {
        ...pkg,
        icon: <Redhat size={size} />,
        title: "Red Hat/Centos/Fedora users",
        description:
          "You can use our yum repository for Red Hat based distributions.",
        instructions: createDefaultInstructionUrl(version, pkg.type),
      };
    case "windows":
      return {
        ...pkg,
        icon: <Windows size={size} />,
        title: "Windows users",
        description:
          "Download the package and follow the installation instructions.",
        instructions: createDefaultInstructionUrl(version, pkg.type),
      };
    case "unix":
      return {
        ...pkg,
        icon: <Linux size={size} />,
        title: "Generic Linux/Unix users",
        description:
          "Download the package and follow the installation instructions.",
        instructions: createDefaultInstructionUrl(version, pkg.type),
      };
    case "osx":
      return {
        ...pkg,
        icon: <Apple size={size} />,
        title: "Mac OS X users",
        description: "You can use our homebrew tap.",
        instructions: createDefaultInstructionUrl(version, pkg.type),
      };
    case "docker":
      return {
        ...pkg,
        icon: <Docker size={size} />,
        title: "Docker users",
        description: "We provide a docker image on the offical Docker Hub.",
        instructions: createDefaultInstructionUrl(version, pkg.type),
      };
    case "k8s":
      return {
        ...pkg,
        icon: <Kubernetes size={size} />,
        title: "Kubernetes users",
        description:
          "You can use our Helm repository for Kubernetes installations.",
        instructions: createDefaultInstructionUrl(version, pkg.type),
      };
    case "war":
      // TODO instructions?
      return {
        ...pkg,
        icon: <Java size={size} />,
        title: "WebApp users",
        description:
          "Download the war file and deploy it to your application server.",
      };
    case "cli":
      // TODO is the instructions link correct? what if we have a version 2 cli?
      return {
        ...pkg,
        icon: <Gnubash size={size} />,
        title: `Command line users`,
        description: "Download the cli and have a look at the instructions.",
        instructions:
          createDocBaseUrl(version) + "/administration/command-line-client/",
      };
    default:
      return null;
  }
};

type TableOfContentsProps = {
  packages: PackageDownloadProps[];
  versionLog: any;
};

const TableOfContents: FC<TableOfContentsProps> = ({ packages, versionLog }) => (
  <div className="content">
    <ul>
      <li>
        <a href="#packages">Packages</a>
        <ul>
          {packages.map(pkg => (
            <li key={pkg.type}>
              <a href={`#${pkg.type}`} title={pkg.description}>
                {pkg.title}
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
      <h3 className="title is-5">Changelog</h3>
      <a id="changelog"></a>
      <Changes content={versionLog.changes.html} />
    </ChangelogContainer>
  );
};

type DownloadProps = {
  release: any;
  changelog: any;
};

const Download: FC<DownloadProps> = ({ release, changelog }) => {
  const props = release.packages
    .map(pkg => createProps(release.tag, pkg, "3em", "top"))
    .filter(p => !!p)
    .sort((a, b) => a.type.localeCompare(b.type));

  const versionLog = changelog.versions.find(v => v.tag === release.tag);
  return (
    <>
      <h2 className="title is-4">
        {release.tag} - ({release.date})
      </h2>
      <p>
        If you are looking for an other version of SCM-Manager, please have a
        look at the <Link to="/download/archive">archive</Link>.
      </p>
      <TableOfContents packages={props} versionLog={versionLog} />
      <h3 className="title is-5">Packages</h3>
      <a id="packages"></a>
      {props.map(p => (
        <PackageDownload key={p.type} {...p} />
      ))}
      <Changelog versionLog={versionLog} />
    </>
  );
};

export const fragments = graphql`
  fragment DownloadReleaseFragment on ReleasesYaml {
    tag
    date(formatString: "Y-MM-DD")
    packages {
      type
      url
      checksum
    }
  }

  fragment DownloadChangelogFragment on ChangelogVersions {
    tag
    changes {
      html
    }
  }
`;

export default Download;
