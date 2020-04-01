import React from "react";
import SEO from "../components/SEO";
import Title from "../components/Title";
import PageContainer from "../layout/PageContainer";
import { graphql, Link } from "gatsby";
import Subtitle from "../components/Subtitle";
import styled from "styled-components";
import kebabCase from "lodash.kebabcase";

const Count = styled.span`
  width: 2rem;
  margin-right: 0.5rem;
`;

const Posts = ({ data }) => {
  return (
    <PageContainer>
      <SEO title="Blog" />
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>Blog</Title>
          <Subtitle>News and posts from the SCM-Manager team</Subtitle>
          {data.posts.edges.map(edge => (
            <div className="content">
              <h2>
                <Link to={`/blog${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
            </div>
          ))}
        </div>
        <div className="column is-one-quarter">
          <aside className="menu">
            <p className="menu-label">Categories</p>
            <ul className="menu-list">
              {data.categories.group.map(c => (
                <li key={c.fieldValue}>
                  <Link to={`/blog/categories/${kebabCase(c.fieldValue)}`}>
                    <Count className="tag is-rounded">{c.totalCount}</Count>{" "}
                    {c.fieldValue}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="menu-label">Authors</p>
            <ul className="menu-list">
              {data.authors.group.map(a => (
                <li key={a.fieldValue}>
                  <Link to={`/blog/authors/${kebabCase(a.fieldValue)}`}>
                    <Count className="tag is-rounded">{a.totalCount}</Count>{" "}
                    {a.fieldValue}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query {
    categories: allMarkdownRemark(
      filter: { fields: { slug: { glob: "/posts/**" } } }
      sort: { fields: [frontmatter___categories] }
    ) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
    authors: allMarkdownRemark(
      filter: { fields: { slug: { glob: "/posts/**" } } }
      sort: { fields: [frontmatter___author] }
    ) {
      group(field: frontmatter___author) {
        fieldValue
        totalCount
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { slug: { glob: "/posts/**" } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 20
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            categories
          }
          excerpt
        }
      }
    }
  }
`;

export default Posts;
