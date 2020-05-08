import { graphql } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import PluginLayout from "../layout/PluginLayout";
import Accordion from "../layout/Accordion";
import HtmlContent from "../layout/HtmlContent";
import Icon from "../components/Icon";

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

const Changes = styled(HtmlContent)`
  margin-bottom: 0 !important;

  h3 {
    font-size: 1em;
  }
`;

const Changelog = ({ changelog, tag }) => {
  if (!changelog) {
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
        <p className="is-scrollable-x">{checksum}</p>
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

const Release = ({ release, changelog }) => {
  const [showChecksum, setShowChecksum] = useState(false);
  return (
    <>
      <div className="media">
        <div className="media-left">
          <Download url={release.url} />
          <ChecksumButton onClick={() => setShowChecksum(!showChecksum)} />
        </div>
        <div className="media-content is-scrollable-x">
          <Conditions conditions={release.conditions} />
          {showChecksum && <Checksum checksum={release.checksum} />}
        </div>
      </div>
      <Changelog tag={release.tag} changelog={changelog} />
    </>
  );
};

const Releases = ({ releases, changelog }) => {
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
          <Release release={release} changelog={changelog} />
        </Accordion>
      ))}
    </>
  );
};

const PluginReleases = ({ data, path }) => (
  <PluginLayout plugin={data.plugin} path={path}>
    <Releases releases={data.releases.nodes} changelog={data.changelog} />
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
        date(formatString: "YYYY-MM-DD HH:mm")
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
  }
`;

export default PluginReleases;
