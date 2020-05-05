import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";

const PluginLicense = ({ data, path }) => (
  <PluginLayout plugin={data.plugin} path={path}>
    <License data={data}/>
  </PluginLayout>
);

const License = ({ data }) => {
  if (data.license && data.license.childPlainText && data.license.childPlainText.content) {
    return <>
      <p>The plugin is released under the following license:</p>
      <pre><code>{data.license.childPlainText.content}</code></pre>
    </>;
  }
  return <p>No LICENSE.txt found</p>;
};

/* TODO: search plugin specific license */
export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      ...PluginLayout
    }
    license: file(relativePath: { glob: "**/LICENSE.txt" }) {
      childPlainText {
        content
      }
    }
  }
`;

export default PluginLicense;
