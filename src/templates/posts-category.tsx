import React from "react";
import SEO from "../components/SEO";
import Title from "../components/Title";
import PageContainer from "../layout/PageContainer";
import { graphql } from "gatsby";
import Subtitle from "../components/Subtitle";
import BlogSideNavigation from "../components/BlogSideNavigation";
import PostList from "../components/PostList";

const PostsCategory = ({ pageContext: { category }, data }) => {
  return (
    <PageContainer>
      <SEO title="Blog" />
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>Category: {category}</Title>
          <Subtitle>News and posts from {category} category</Subtitle>
          <PostList posts={data.posts.edges.map(edge => edge.node)} />
        </div>
        <BlogSideNavigation />
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query($category: String!) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: $category } } }
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

export default PostsCategory;
