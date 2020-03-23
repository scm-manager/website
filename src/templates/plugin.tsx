import React from "react";
import { graphql } from "gatsby";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import { Release as ReleaseType } from "../types/release";
import { Plugin as PluginType } from "../types/plugin";
import Release from "../components/Release";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";

const renderReleases = (plugin: PluginType, releases: ReleaseType[]) => {
  if (releases.length > 0) {
    return releases.map((release: ReleaseType) => (
      <Release key={release.tag} release={release} plugin={plugin} />
    ));
  }
  return <p>No releases yet</p>;
};

const Plugin = ({ data }) => {
  const plugin = data.markdownRemark;
  const releases = data.allReleasesYaml.nodes;
  return (
    <PageContainer>
      <SEO title={"Plugin " + plugin.frontmatter.displayName} />
      <div className="columns">
        <div className="column is-three-quarters is-plugin">
          <Title>{plugin.frontmatter.displayName}</Title>
          <Subtitle>{plugin.frontmatter.description}</Subtitle>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: plugin.html }}
          />
        </div>
        <div className="column content is-one-quarter">
          <h2>Releases</h2>
          {renderReleases(plugin.frontmatter, releases)}
        </div>
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query($slug: String!, $name: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        displayName
        description
        author
      }
    }
    allReleasesYaml(filter: { plugin: { eq: $name } }) {
      nodes {
        tag
        date(formatString: "Y-MM-DD")
        url
      }
    }
  }
`;

export default Plugin;
