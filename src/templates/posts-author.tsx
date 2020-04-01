import React from "react";
import SEO from "../components/SEO";
import Title from "../components/Title";
import PageContainer from "../layout/PageContainer";
import { graphql } from "gatsby";
import Subtitle from "../components/Subtitle";
import BlogSideNavigation from "../components/BlogSideNavigation";
import PostList from "../components/PostList";
import Paginator from "../components/Paginator";

const PostsAuthor = ({ pageContext, data }) => {
  return (
    <PageContainer>
      <SEO title="Blog" />
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>Author: {pageContext.author}</Title>
          <Subtitle>News and posts by {pageContext.author}</Subtitle>
          <PostList posts={data.posts.edges.map(edge => edge.node)} />
          <Paginator slugBase={`/blog/authors/${pageContext.author}/`} {...pageContext} />
        </div>
        <BlogSideNavigation />
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query($author: String!) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { author: { eq: $author } } }
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

export default PostsAuthor;
