import React from "react";
import { graphql } from "gatsby";
import PluginDocsLayout from "../layout/PluginDocsLayout";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import HtmlContent from "../layout/HtmlContent";

const PluginDocs = ({ data, path }) => (
  <PluginDocsLayout data={data} path={path}>
    <Title>{data.markdownRemark.frontmatter.title}</Title>
    <Subtitle>{data.markdownRemark.frontmatter.subtitle}</Subtitle>
    <HtmlContent content={data.markdownRemark.html}/>
  </PluginDocsLayout>
);

export const query = graphql`
  query($name: String!, $slug: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      name
      displayName
      description
      author
      documentation {
        version
        languages
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        subtitle
        displayToc
      }
    }
  }
`;

export default PluginDocs;
