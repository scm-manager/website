import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

type Props = {
  posts: Array<any>;
};

const SmallMaringHR = styled.hr`
  margin: 1rem 0;
`;

const PostList: FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="content">
        <h2>
          <Link to={`/blog${post.fields.slug}`}>
            {post.frontmatter.title}
          </Link>
        </h2>
        <p className="has-text-grey	">
          Posted on {post.frontmatter.date} by{" "}
          <Link to={`/blog/authors/${post.frontmatter.author}`}>
            {post.frontmatter.author}
          </Link>
        </p>
        <SmallMaringHR />
        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        <SmallMaringHR />
        <p className="has-text-grey">
          Posted in{" "}
          {post.frontmatter.categories.map((category, i) => (
            <>
              <Link to={`/blog/categories/${category}`}>{category}</Link>
              {i + 1 < post.frontmatter.categories.length ? ", " : ""}
            </>
          ))}
        </p>
        <SmallMaringHR />
      </div>
    ))}
  </>
);

export const postListFragment = graphql`
  fragment PostList on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "YYYY-MM-DD")
      author
      categories
    }
    excerpt(pruneLength: 280, format: HTML)
  }
`;

export default PostList;
