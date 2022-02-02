import { graphql } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { satisfies } from "compare-versions";
import PluginLayout from "../layout/PluginLayout";
import Accordion from "../layout/Accordion";
import Icon from "../components/Icon";
import Changes from "../components/Changes";
import AlertsNotification from "../components/AlertsNotification";

const Download = ({ url }) => {
  if (url) {
    return (
      <a className="button is-info is-outlined" href={url}>
        Download
      </a>
    );
  }
  return null;
};

const Conditions = ({ conditions }) => {
  if (conditions && conditions.minVersion) {
    return (
      <>
        <strong>Conditions:</strong>
        <p>Requires at least SCM-Manager version {conditions.minVersion}.</p>
      </>
    );
  }
  return null;
};

const Changelog = ({ changelog, tag }) => {
  if (!changelog || !changelog.versions) {
    return null;
  }
  const version = changelog.versions.find(v => tag === v.tag);
  if (version && version.changes) {
    return (
      <>
        <h6 className="has-text-weight-bold">Changes:</h6>
        <hr />
        <Changes className="content" content={version.changes.html} />
      </>
    );
  }
  return null;
};

const ChecksumToggleWrapper = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

const ChecksumToggler = styled.small`
  text-decoration: underline dotted grey;
  cursor: pointer;
`;

const Checksum = ({ checksum }) => {
  if (checksum) {
    return (
      <>
        <strong>Checksum (SHA256):</strong>
        <p className="ellipsis-overflow">{checksum}</p>
      </>
    );
  }
  return null;
};

const ChecksumButton = ({ onClick }) => (
  <ChecksumToggleWrapper>
    <ChecksumToggler onClick={onClick} title="Toggle checksum visiblity">
      Checksum{" "}
      <span className="has-text-info">
        <Icon icon="info" size="sm" />
      </span>
    </ChecksumToggler>
  </ChecksumToggleWrapper>
);

const Release = ({ release, changelog, alerts }) => {
  const [showChecksum, setShowChecksum] = useState(false);
  return (
    <>
      <AlertsNotification
        alerts={alerts.filter(a => satisfies(release.tag, a.affectedVersions))}
      />
      <div className="media">
        <div className="media-left">
          <Download url={release.url} />
          <ChecksumButton onClick={() => setShowChecksum(!showChecksum)} />
        </div>
        <div className="media-content ellipsis-overflow">
          <Conditions conditions={release.conditions} />
          {showChecksum && <Checksum checksum={release.checksum} />}
        </div>
      </div>
      <Changelog tag={release.tag} changelog={changelog} />
    </>
  );
};

const Releases = ({ releases, changelog, alerts }) => {
  if (releases.length === 0) {
    return <p className="notification is-info">No CHANGELOG.md found</p>;
  }

  return (
    <>
      {releases.map((release, i) => (
        <Accordion
          label={`${release.tag} - (${release.date})`}
          open={i === 0}
          key={release.tag}
        >
          <Release release={release} changelog={changelog} alerts={alerts} />
        </Accordion>
      ))}
    </>
  );
};

const PluginReleases = ({ data }) => (
  <PluginLayout plugin={data.plugin}>
    <Releases
      releases={data.releases.nodes}
      changelog={data.changelog}
      alerts={data.alerts.nodes}
    />
  </PluginLayout>
);

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      ...PluginLayout
    }
    releases: allReleasesYaml(
      filter: { plugin: { eq: $name } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        tag
        date(formatString: "Y-MM-DD HH:mm")
        url
        checksum
        conditions {
          minVersion
        }
      }
    }
    changelog: changelog(fields: { plugin: { eq: $name } }) {
      versions {
        tag
        changes {
          html
        }
      }
    }
    alerts: allAlertsYaml(filter: { fields: { component: { eq: $name } } }) {
      nodes {
        ...DownloadAlertsFragment
      }
    }
  }
`;

export default PluginReleases;
