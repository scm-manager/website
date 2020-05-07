import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";

const PluginInstallation = ({ data, path }) => (
  <PluginLayout plugin={data.plugin} path={path}>
    <div className="notification is-info">There is no documentation available</div>
  </PluginLayout>
);

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      ...PluginLayout
    }
  }
`;

export default PluginInstallation;
