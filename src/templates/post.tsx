import React from "react";
import { graphql, Link } from "gatsby";

import Title from "../components/Title";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";
import BlogSideNavigation from "../components/BlogSideNavigation";
import HtmlContent from "../layout/HtmlContent";
import TableOfContents from "../layout/TableOfContents";

const Post = ({ data: { post } }) => {
  return (
    <PageContainer>
      <SEO title={post.frontmatter.title} />
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>{post.frontmatter.title}</Title>
          <p className="has-text-grey	">
            Posted on {post.frontmatter.date} by{" "}
            <Link to={`/blog/authors/${post.frontmatter.author}`}>
              {post.frontmatter.author}
            </Link>
          </p>
          <hr />
          {post.frontmatter.displayToc && <><TableOfContents content={post.tableOfContents} /><hr /></>}
          <HtmlContent content={post.html} />
          <hr />
          <p className="has-text-grey">
            Posted in{" "}
            {post.frontmatter.categories.map((category, i) => (
              <React.Fragment key={category}>
                <Link to={`/blog/categories/${category}`}>{category}</Link>
                {i + 1 < post.frontmatter.categories.length ? ", " : ""}
              </React.Fragment>
            ))}
          </p>
          <hr />
        </div>
        <BlogSideNavigation />
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents(absolute: false)
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
        categories
        displayToc
      }
    }
  }
`;

export default Post;
