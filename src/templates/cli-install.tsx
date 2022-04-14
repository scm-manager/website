import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";
import HtmlContent from "../layout/HtmlContent";
import TableOfContents from "../layout/TableOfContents";
import CanonicalLink from "../components/CanonicalLink";
import WarningBanner from "../components/WarningBanner";

const renderToc = page => {
  if (page.frontmatter.displayToc) {
    return <TableOfContents content={page.tableOfContents} />;
  }
  return null;
};

type PageContext = {
  slug: string;
  version: string;
  latestVersion: string;
  latestPageVersion: string;
  language: string;
  canonicalPath: string;
  latestRootPath: string;
};

const CliInstall: FC<PageProps<any, PageContext>> = ({
  data,
  pageContext,
}) => {
  return (
    <PageContainer>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={
          data.markdownRemark.frontmatter.description ||
          data.markdownRemark.description
        }
        keywords={data.markdownRemark.frontmatter.keywords}
      />
      <CanonicalLink path={pageContext.canonicalPath} />
      <div className="columns">
        <div className="column is-three-quarters">
          <WarningBanner
            {...pageContext}
            latestRootLink={pageContext.latestRootPath}
            latestPageLink={pageContext.canonicalPath}
            type="cli"
          />
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <Subtitle>{data.markdownRemark.frontmatter.subtitle}</Subtitle>
          {renderToc(data.markdownRemark)}
          <HtmlContent content={data.markdownRemark.html} />
        </div>
      </div>
    </PageContainer>
  );
};

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
    languages: allMarkdownRemark(
      filter: { fields: { plugin: { eq: null }, version: { eq: $version } } }
    ) {
      group(field: fields___language) {
        fieldValue
      }
    }
    cliReleases: allReleasesYaml(
      filter: { plugin: { eq: null }, type: { eq: "cli" } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        tag
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      description: excerpt(pruneLength: 160)
      tableOfContents
      frontmatter {
        title
        subtitle
        displayToc
        description
        keywords
        image: featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`;

export default CliInstall;
