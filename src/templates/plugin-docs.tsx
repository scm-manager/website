import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";
import NavigationSettings from "../components/NavigationSettings";

/* TODO: correct path and add markdown underneath */
const PluginInstallation = ({ data, path }) => (
  <PluginLayout data={data} path={path}>
    <div className="columns">
      <div className="column is-two-thirds">
        <NavigationSettings path={path}/>
      </div>
    </div>
    <p>No doc found</p>
  </PluginLayout>
);

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      name
      displayName
      description
      author
    }
  }
`;

export default PluginInstallation;
