import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";

const PluginInstallation = ({ data, path }) => (
  <PluginLayout plugin={data.plugin} path={path}>
    <h1>{data.plugin.category.name} {data.plugin.category.displayName}</h1>
  </PluginLayout>
);

// TODO: replace with correct plugin-installation.md
export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      ...PluginLayout
      name
      category {
        displayName
      }
    }
  }
`;

export default PluginInstallation;
