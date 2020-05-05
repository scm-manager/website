import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";
import HtmlContent from "../layout/HtmlContent";

const Changelog = ({changelog}) => {
  if (changelog && changelog.html) {
    return <HtmlContent content={changelog.html} />;
  }
  return null;
};

const Releases = ({releases}) => {
  if (releases.length === 0) {
    return <p className="notification is-info">No CHANGELOG.md found</p>
  }

  // * Accordeon
  // Heading: Tag & Date
  // Content:
  // * Download + Checksum
  // * Conditions ... Requires at leas SCM-Manager version {minVersion} ...
  // * Changelog

  return (
    <ul>
      { releases.map((release) => (
        <li key={release.tag}>
          {release.tag}
        </li>
      )) }
    </ul>
  );
};

const PluginReleases = ({ data, path }) => (
    <PluginLayout plugin={data.plugin} path={path}>
      <Releases releases={data.releases.nodes} />
      <Changelog changelog={data.changelog} />
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
