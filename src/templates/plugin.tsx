import React from "react";
import { graphql } from "gatsby";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import { Release as ReleaseType } from "../types/release";
import { Plugin as PluginType } from "../types/plugin";
import Release from "../components/Release";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";
import HtmlContent from "../layout/HtmlContent";

const renderReleases = (plugin: PluginType, releases: ReleaseType[]) => {
  if (releases.length > 0) {
    return releases.map((release: ReleaseType) => (
      <Release key={release.tag} release={release} plugin={plugin} />
    ));
  }
  return <p>No releases yet</p>;
};

const Plugin = ({ data }) => (
  <PageContainer>
    <SEO title={"Plugin " + data.plugin.displayName} />
    <div className="columns">
      <div className="column is-three-quarters is-plugin">
        <Title>{data.plugin.displayName}</Title>
        <Subtitle>{data.plugin.description}</Subtitle>
        <HtmlContent content={data.readme.html} />
      </div>
      <div className="column content is-one-quarter">
        <h2>Releases</h2>
        {renderReleases(data.plugin, data.releases.nodes)}
      </div>
    </div>
  </PageContainer>
);

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      name
      displayName
      description
      author
    }
    readme: markdownRemark(fields: { plugin: { eq: $name } }) {
      html
    }
    releases: allReleasesYaml(filter: { plugin: { eq: $name } }) {
      nodes {
        tag
        date(formatString: "Y-MM-DD")
        url
      }
    }
  }
`;

export default Plugin;
