import React from "react";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";
import HtmlContent from "../layout/HtmlContent";
import PluginNavigation from "../components/PluginNavigation";

/* remove logo and title in readme */
const regex = new RegExp("(<p align=\"center[\\s\\S]+?</h1>)", "gm");

const Plugin = ({ path, data }) => (
  <PageContainer>
    <SEO title={"Plugin " + data.plugin.displayName} />
    <div className="columns">
      <div className="column is-three-quarters is-plugin">
        <Title>{data.plugin.displayName}</Title>
        <Subtitle>{data.plugin.description}</Subtitle>
        <HtmlContent content={data.readme.html.replace(regex, "")} />
      </div>
      <div className="column is-one-quarter">
        <PluginNavigation path={path} name={data.plugin.name} />
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
  }
`;

export default Plugin;
