import React from "react";
import SEO from "../components/SEO";
import Title from "../components/Title";
import PageContainer from "../layout/PageContainer";
import { graphql } from "gatsby";
import Subtitle from "../components/Subtitle";
import BlogSideNavigation from "../components/BlogSideNavigation";
import PostList from "../components/PostList";

const Posts = ({ data }) => {
  return (
    <PageContainer>
      <SEO title="Blog" />
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>Blog</Title>
          <Subtitle>News and posts from the SCM-Manager team</Subtitle>
          <PostList posts={data.posts.edges.map(edge => edge.node)} />
        </div>
        <BlogSideNavigation />
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fields: { slug: { glob: "/posts/**" } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 10
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
