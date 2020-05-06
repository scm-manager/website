import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";

const PluginLicense = ({ data, path }) => (
  <PluginLayout plugin={data.plugin} path={path}>
    <License data={data} />
  </PluginLayout>
);

const License = ({ data }) => {
  if (data.license && data.license.content) {
    return (
      <pre>
        <code>{data.license.content}</code>
      </pre>
    );
  }
  return <p>No LICENSE.txt found</p>;
};

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      ...PluginLayout
    }
    license: plainText(
      fields: { plugin: { eq: $name }, slug: { glob: "**/LICENSE/**" } }
    ) {
      content
    }
  }
`;

export default PluginLicense;
