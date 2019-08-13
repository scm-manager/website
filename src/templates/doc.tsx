import React from "react";
import { graphql } from "gatsby";

import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";
import DocNavigation from "../components/DocNavigation";

const renderToc = content => {
  if (content.frontmatter.displayToc) {
    return (
      <aside
        className="content"
        dangerouslySetInnerHTML={{ __html: content.tableOfContents }}
      />
    );
  }
  return null;
};

const Plugin = ({ data }) => {
  const content = data.markdownRemark;
  return (
    <Page>
      <SEO title={content.frontmatter.title} />
      <div className="container section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters">
              <Title>{content.frontmatter.title}</Title>
              <Subtitle>{content.frontmatter.subtitle}</Subtitle>
              {renderToc(content)}
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content.html }}
              />
            </div>
            <div className="column is-one-quarter">
              <DocNavigation />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export const query = graphql`
  query($slug: String!) {
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

export default Plugin;
