import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";

const PluginInstallation = ({ data, path }) => (
  <PluginLayout plugin={data.plugin} path={path}>
    <div className="content">
      <p>To download the plugin, go to the plugin center and navigate to {data.plugin.category.displayName} category.
        Within this category you will find the {data.plugin.displayName} plugin. With a click on the deposited link you
        will land in the
        plugin section. Under <q>Releases</q> you will find a list of the latest releases. Find the right version for
        you and click on <q>Download</q>.
        <br/>
        Furthermore it should be noted that dependencies on a core version can be specified in the target version or
        the {data.plugin.name} may depend on other plugins.</p>
      <p>Once downloaded, the plugin can be copied into the local plugin directory.</p>
    </div>
  </PluginLayout>
);

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      ...PluginLayout
      displayName,
      name,
      category {
        displayName
      }
    }
  }
`;

export default PluginInstallation;
