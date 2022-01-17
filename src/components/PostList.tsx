import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import HtmlContent from "../layout/HtmlContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  posts: Array<any>;
};

const SmallMaringHR = styled.hr`
  margin: 1rem 0;
`;

const PostList: FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <div key={post.fields.slug} className="content">
        <h2>
          <Link to={`/blog${post.fields.slug}`}>
            {post.frontmatter.alert ? <FontAwesomeIcon icon={faExclamationTriangle} /> : null}{" "}
            {post.frontmatter.title}
          </Link>
        </h2>
        <p className="has-text-grey	">
          Posted on {post.frontmatter.date} by{" "}
          <Link to={`/blog/authors/${post.frontmatter.author.id}`}>
            {post.frontmatter.author.id}
          </Link>
        </p>
        <SmallMaringHR />
        <HtmlContent content={post.excerpt} />
        <SmallMaringHR />
        <p className="has-text-grey">
          Posted in{" "}
          {post.frontmatter.categories.map((category, i) => (
            <React.Fragment key={category}>
              <Link to={`/blog/categories/${category}`}>{category}</Link>
              {i + 1 < post.frontmatter.categories.length ? ", " : ""}
            </React.Fragment>
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
      author {
        id
      }
      categories
      alert
    }
    excerpt(pruneLength: 280, format: HTML)
  }
`;

export default PostList;
