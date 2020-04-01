import React from "react";
import { graphql } from "gatsby";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({ data }) => {
  let page;
  let content;
  if (data.markdownRemark) {
    page = data.markdownRemark;
    content = (
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    );
  } else if (data.mdx) {
    page = data.mdx;
    content = (
      <div className="content">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    );
  }
  return (
    <PageContainer>
      <SEO title={page.frontmatter.title} />
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>{page.frontmatter.title}</Title>
          <Subtitle>{page.frontmatter.author}</Subtitle>
          {content}
        </div>
        <div className="column is-one-quarter"></div>
      </div>
    </PageContainer>
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
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
        subtitle
        displayToc
      }
    }
  }
`;

export default Post;
