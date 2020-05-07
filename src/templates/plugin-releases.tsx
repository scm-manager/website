import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import PluginLayout from "../layout/PluginLayout";
import Accordion from "../layout/Accordion";
import HtmlContent from "../layout/HtmlContent";
import Checksum from "../components/Checksum";

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
    return <Changes className="content" content={version.changes.html} />;
  }
  return null;
};

const Releases = ({ releases, changelog }) => {
  if (releases.length === 0) {
    return <p className="notification is-info">No CHANGELOG.md found</p>;
  }

  return (
    <>
      {releases.map((release,i) => (
        <Accordion
          label={`${release.tag} - (${release.date})`}
          open={i===0}
          key={release.tag}
        >
          <div className="media">
            <div className="media-left">
              <Download url={release.url} />
            </div>
            <div className="media-content">
              <Conditions conditions={release.conditions} />
            </div>
          </div>
          <Checksum checksum={release.checksum} url={release.url} />
          <h6 className="has-text-weight-bold">Changes:</h6>
          <hr />
          <Changelog tag={release.tag} changelog={changelog} />
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
  }
`;

export default PluginReleases;
