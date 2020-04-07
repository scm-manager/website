import React from "react";
import { graphql } from "gatsby";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";
import DocNavigation from "../components/DocNavigation";
import PageContainer from "../layout/PageContainer";

const renderToc = page => {
  if (page.frontmatter.displayToc) {
    return (
      <aside
        className="content"
        dangerouslySetInnerHTML={{ __html: page.tableOfContents }}
      />
    );
  }
  return null;
};

const Doc = ({ data }) => (
  <PageContainer>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <div className="columns">
      <div className="column is-three-quarters">
        <Title>{data.markdownRemark.frontmatter.title}</Title>
        <Subtitle>{data.markdownRemark.frontmatter.subtitle}</Subtitle>
        {renderToc(data.markdownRemark)}
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
      <div className="column is-one-quarter">
        <DocNavigation navigation={data.navigation} />
      </div>
    </div>
  </PageContainer>
);

export const query = graphql`
  query($slug: String!, $version: String!, $language: String!) {
    navigation: allNavigationYaml(
      filter: {
        fields: { version: { eq: $version }, language: { eq: $language } }
      }
    ) {
      ...DocNavigation
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

export default Doc;
