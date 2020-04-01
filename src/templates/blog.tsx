import React from "react";
import SEO from "../components/SEO";
import Title from "../components/Title";
import PageContainer from "../layout/PageContainer";
import { graphql } from "gatsby";
import Subtitle from "../components/Subtitle";
import BlogSideNavigation from "../components/BlogSideNavigation";
import PostList from "../components/PostList";
import Paginator from "../components/Paginator";

const Posts = ({ data, pageContext }) => {
  return (
    <PageContainer>
      <SEO title="Blog" />
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>Blog</Title>
          <Subtitle>News and posts from the SCM-Manager team</Subtitle>
          <PostList posts={data.posts.edges.map(edge => edge.node)} />
          <Paginator slugBase="/blog/" {...pageContext} />
        </div>
        <BlogSideNavigation />
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { fields: { slug: { glob: "/posts/**" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostList
        }
      }
    }
  }
`;

export default Posts;
