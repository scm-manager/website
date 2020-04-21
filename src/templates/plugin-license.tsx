import React from "react";
import { graphql } from "gatsby";
import PluginLayout from "../layout/PluginLayout";

/* TODO: render LICENSE.txt instead */
const PluginLicense = ({ data, path }) => (
  <PluginLayout data={data} path={path}>
    <License data={data}/>
  </PluginLayout>
);

const License = ({ data }) => {
  if (data.license && data.license.rawMarkdownBody) {
    return <>
      <p>The plugin is released under the following license:</p>
      <pre><code>{data.license.rawMarkdownBody}</code></pre>
    </>;
  }
  return <p>No LICENSE.txt found</p>;
};

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      name
      displayName
      description
      author
    }
    license: markdownRemark(fields: { plugin: { eq: $name }, slug: {glob: "**/README"}}) {
      rawMarkdownBody
    }
  }
`;

export default PluginLicense;
