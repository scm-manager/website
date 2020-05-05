import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import PluginLayout from "../layout/PluginLayout";
import Accordion from "../layout/Accordion";
import HtmlContent from "../layout/HtmlContent";

const ChecksumText = styled.small`
  margin-left: 0.5rem;
  font-family: monospace;
  font-size: 75%;
`;

const Download = ({ url }) => {
  if (url) {
    return <a className="button is-info is-outlined"
              href={url}>Download</a>;
  }
  return null;
};

const Checksum = ({ checksum, url }) => {
  if (checksum && url) {
    const filename = url.split("/").pop();
    return <p>
      {filename} (sha1):<br/>
      <ChecksumText>{checksum}</ChecksumText>
    </p>;
  }
  return null;
};

const Conditions = ({ conditions }) => {
  if (conditions && conditions.minVersion) {
    return <p>Requires at least SCM-Manager version {conditions.minVersion}.</p>;
  }
  return null;
};

const Changelog = ({ changelog }) => {
  if (changelog && changelog.html) {
    return <HtmlContent content={changelog.html}/>;
  }
  return null;
};

const Releases = ({ releases, changelog }) => {
  if (releases.length === 0) {
    return <p className="notification is-info">No CHANGELOG.md found</p>;
  }

  return (
    <>
      {releases.map((release) => (
        <Accordion label={`${release.tag} (${release.date})`} key={release.tag}>
          <div className="media">
            <div className="media-left">
              <Download url={release.url}/>
            </div>
            <div className="media-content">
              <Conditions conditions={release.conditions}/>
            </div>
          </div>
          <Checksum checksum={release.checksum} url={release.url}/>
          <hr/>
          <Changelog changelog={changelog}/>
        </Accordion>
      ))}
    </>
  );
};

const PluginReleases = ({ data, path }) => (
  <PluginLayout plugin={data.plugin} path={path}>
    <Releases releases={data.releases.nodes} changelog={data.changelog}/>
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
    changelog: markdownRemark(
      fields: { plugin: { eq: $name }, slug: { glob: "**/CHANGELOG" } }
    ) {
      html
    }
  }
`;

export default PluginReleases;
