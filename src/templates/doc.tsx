import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";
import DocNavigation from "../components/DocNavigation";
import PageContainer from "../layout/PageContainer";
import HtmlContent from "../layout/HtmlContent";
import TableOfContents from "../layout/TableOfContents";
import { PATH_PART_INDEX_DOCS_LANGUAGE, PATH_PART_INDEX_DOCS_VERSION } from "../components/NavigationSettings";

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
        <DocNavigation versions={data.versions} languages={data.languages} path={path} navigation={data.navigation} versionPathIndex={PATH_PART_INDEX_DOCS_VERSION} languagePathIndex={PATH_PART_INDEX_DOCS_LANGUAGE} />
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
    versions: allMarkdownRemark(filter: { fields: { plugin: { eq: null } } }) {
      group(field: fields___version) {
        fieldValue
      }
    }
    languages: allMarkdownRemark(filter: { fields: { plugin: { eq: null }, version: { eq: $version } } }) {
      group(field: fields___language) {
        fieldValue
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

export default Doc;
