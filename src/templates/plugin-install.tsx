import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";

const PluginInstallation = ({ data, path }) => (
  <PluginLayout plugin={data.plugin} path={path}>
    <div className="content">
      <p>
        To install the <q>{data.plugin.displayName}</q> plugin on your
        scm-manager instance, follow the steps below:
      </p>
      <div className="notification is-warning">
        <ul>
          <li>
            Plugin installations should only be done, if no one else is currently
            working with system
          </li>
          <li>
            The automatic restart after the installation does not work on
            every platform. On such a platfom a manual restart of scm-manager is
            required
          </li>
        </ul>
      </div>
      <ul>
        <li>Login with an user with administrator priviledges</li>
        <li>Go to the administration via the top level navigation</li>
        <li>
          Choose <q>Plugins</q> and then <q>Available</q> from the side menu
        </li>
        <li>
          Scroll down to the <q>{data.plugin.category.displayName}</q> category
        </li>
        <li>
          Find the <q>{data.plugin.displayName}</q> plugin and click on the
          donwload icon in the upper right corner of the plugin card
        </li>
        <li>
          Check the box by <q>Restart to make plugin changes effective</q>
        </li>
        <li>
          Click <q>Install</q> and wait until the scm-manager has finished the
          restart
        </li>
      </ul>
    </div>
  </PluginLayout>
);

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      ...PluginLayout
      displayName
      name
      category {
        displayName
      }
    }
  }
`;

export default PluginInstallation;
