import React, { FC, ReactNode } from "react";
import SEO from "../components/SEO";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import PageContainer from "../layout/PageContainer";
import { graphql } from "gatsby";
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

type Package = {
  type: string;
  url?: string;
  checksum?: string;
};

type PackageProps = {
  pkg: Package;
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
  description: string;
  type: string;
  url?: string;
  checksum?: string;
  instructions?: string;
};

const DebianDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Debian size="3rem" />}
    description="You can use our apt repository for Debian based distributions."
    instructions="/docs/en/installation/debian"
    {...pkg}
  />
);

const RedHatDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Redhat size="3rem" />}
    description="You can use our yum repository for Red Hat based distributions."
    instructions="/docs/en/installation/redhat"
    {...pkg}
  />
);

const WindowsDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Windows size="3rem" />}
    description="Download the package and follow the installation instructions."
    instructions="/docs/en/installation/windows"
    {...pkg}
  />
);

const OsxDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Apple size="3rem" />}
    description="You can use our homebrew tap."
    instructions="/docs/en/installation/unix"
    {...pkg}
  />
);

const UnixDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Linux size="3rem" />}
    description="Download the package and follow the installation instructions."
    instructions="/docs/en/installation/unix"
    {...pkg}
  />
);

const DockerDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Docker size="3rem" />}
    description="We provide a docker image on the offical Docker Hub."
    instructions="/docs/en/installation/unix"
    {...pkg}
  />
);

const KubernetesDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Kubernetes size="3rem" />}
    description="You can use our Helm repository for Kubernetes installations."
    instructions="/docs/en/installation/unix"
    {...pkg}
  />
);

const WarDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Java size="3rem" />}
    description="Download the war file and deploy it to your application server."
    {...pkg}
  />
);

const CliDownload: FC<PackageProps> = ({ pkg }) => (
  <PackageDownload
    icon={<Gnubash size="3rem" />}
    description="Download the cli and have a look at the instructions."
    instructions="/docs/en/administration/command-line-client/"
    {...pkg}
  />
);

type ButtonProps = {
  color: string;
  href: string;
  label: string;
};

const Button: FC<ButtonProps> = ({ color, href, label }) => (
  <p className="control">
    {}
    <a className={`button is-${color} is-outlined`} href={href}>
      {label}
    </a>
  </p>
);

const PackageDownload: FC<PackageDownloadProps> = ({
  icon,
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
        <h5>{createTitle(type)}:</h5>
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

const createTitle = (type: string) => {
  switch (type) {
    case "debian":
      return "Debian/Ubuntu users";
    case "redhat":
      return "Red Hat/Centos/Fedora users";
    case "windows":
      return "Windows users";
    case "unix":
      return "Generic Linux/Unix users";
    case "osx":
      return "Mac OS X users";
    case "docker":
      return "Docker users";
    case "k8s":
      return "Kubernetes users";
    case "war":
      return "WebApp users";
    case "cli":
      return "Command line users";
    default:
      return `${type} users`;
  }
};

const createDownload = (pkg: Package) => {
  switch (pkg.type) {
    case "debian":
      return <DebianDownload pkg={pkg} />;
    case "redhat":
      return <RedHatDownload pkg={pkg} />;
    case "windows":
      return <WindowsDownload pkg={pkg} />;
    case "unix":
      return <UnixDownload pkg={pkg} />;
    case "osx":
      return <OsxDownload pkg={pkg} />;
    case "docker":
      return <DockerDownload pkg={pkg} />;
    case "k8s":
      return <KubernetesDownload pkg={pkg} />;
    case "war":
      return <WarDownload pkg={pkg} />;
    case "cli":
      return <CliDownload pkg={pkg} />;
    default:
      return null;
  }
};

type TableOfContentsProps = {
  packages: Package[];
};

const TableOfContents: FC<TableOfContentsProps> = ({ packages }) => (
  <div className="content">
    <ul>
      <li>
        <a href="#packages">Packages</a>
        <ul>
          {packages.map(pkg => (
            <li>
              <a href={`#${pkg.type}`}>{createTitle(pkg.type)}</a>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <a href="#changelog">Changelog</a>
      </li>
    </ul>
  </div>
);

type ChangelogProps = {
  changelog: any;
  version: string;
};

const ChangelogContainer = styled.div`
  margin-top: 2rem;
`;

const Changelog: FC<ChangelogProps> = ({ changelog, version }) => {
  const versionLog = changelog.versions.find(v => v.tag === version);
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

const DownloadPage = ({ data }) => {
  const release = data.releases.nodes[0];
  return (
    <PageContainer>
      <SEO title="Download" />
      <Title>Download</Title>
      <Subtitle>
        Download the latest and greatest version of SCM-Manager
      </Subtitle>
      <h2 className="title is-4">
        {release.tag} - ({release.date})
      </h2>
      <p>
        If you searching for an older version of SCM-Manager, please have a look
        at the <a href="">archive</a>.
      </p>
      <TableOfContents packages={release.packages} />
      <h3 className="title is-5">Packages</h3>
      <a id="packages"></a>
      {release.packages.map(createDownload)}
      <Changelog
        version={release.tag}
        changelog={data.changelog.childChangelog}
      />
    </PageContainer>
  );
};

export const query = graphql`
  query {
    releases: allReleasesYaml(
      filter: { plugin: { eq: null } }
      sort: { fields: [date], order: DESC }
      limit: 1
    ) {
      nodes {
        tag
        date(formatString: "Y-MM-DD")
        packages {
          type
          url
          checksum
        }
      }
    }
    changelog: file(relativePath: { eq: "CHANGELOG.md" }) {
      childChangelog {
        versions {
          tag
          changes {
            html
          }
        }
      }
    }
  }
`;

export default DownloadPage;
