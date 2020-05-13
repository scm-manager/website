import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";
import DocNavigation from "../components/DocNavigation";
import PageContainer from "../layout/PageContainer";
import HtmlContent from "../layout/HtmlContent";
import TableOfContents from "../layout/TableOfContents";

const renderToc = page => {
  if (page.frontmatter.displayToc) {
    return <TableOfContents content={page.tableOfContents} />;
  }
  return null;
};

type DocPageProps = PageProps & {
  data: any;
};

const Doc: FC<DocPageProps> = ({ path, data }) => (
  <PageContainer>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <div className="columns">
      <div className="column is-three-quarters">
        <Title>{data.markdownRemark.frontmatter.title}</Title>
        <Subtitle>{data.markdownRemark.frontmatter.subtitle}</Subtitle>
        {renderToc(data.markdownRemark)}
        <HtmlContent content={data.markdownRemark.html} />
      </div>
      <div className="column is-one-quarter">
        <DocNavigation path={path} navigation={data.navigation} />
      </div>
    </div>
  </PageContainer>
);

export const query = graphql`
  query($slug: String!, $version: String!, $language: String!) {
    navigation: allNavigationYaml(
      filter: {
        fields: {
          version: { eq: $version }
          language: { eq: $language }
          plugin: { eq: null }
        }
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
