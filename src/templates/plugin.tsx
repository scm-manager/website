import React from "react";
import { graphql } from "gatsby";
import HtmlContent from "../layout/HtmlContent";
import PluginLayout from "../layout/PluginLayout";

const Plugin = ({ data }) => {
  const renderReadme = () => {
    if (data.readme && data.readme.html) {
      /* remove logo and title in readme */
      const regex = new RegExp('(<p align="center[\\s\\S]+?</h1>)', "gm");

      return <HtmlContent content={data.readme.html.replace(regex, "")} />;
    }
    return <p>No README.md found</p>;
  };

  return <PluginLayout plugin={data.plugin}>{renderReadme()}</PluginLayout>;
};

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      ...PluginLayout
    }
    readme: markdownRemark(
      fields: { plugin: { eq: $name }, slug: { regex: "/^.*\/README\/?$/" } }
    ) {
      html
    }
  }
`;

export default Plugin;
