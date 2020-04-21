import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";
import HtmlContent from "../layout/HtmlContent";

const PluginInstallation = ({ data, path }) => {
  const renderInstallation = () => {
    if (data.installation && data.installation.html) {
      return <HtmlContent content={data.installation.html}/>;
    }
    return <p>No installation found</p>;
  };

  return <PluginLayout data={data} path={path}>
    {renderInstallation()}
  </PluginLayout>;
};

// TODO: replace with correct plugin-installation.md
export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      name
      displayName
      description
      author
    }
    installation: markdownRemark(fields: { slug: {glob: "/docs/**/installation"}}) {
      html
    }
  }
`;

export default PluginInstallation;
