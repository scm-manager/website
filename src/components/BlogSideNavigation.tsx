import React, { FC } from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Count = styled.span`
  width: 2rem;
  margin-right: 0.5rem;
`;

const query = graphql`
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
  }
`;

const MenuEntryIcon = styled(FontAwesomeIcon)`
  width: 2.25rem !important;
`;

const BlogSideNavigation: FC = () => {
  const { categories, authors } = useStaticQuery(query);
  return (
    <div className="column is-one-quarter">
      <aside className="menu">
        <p className="menu-label">Special</p>
        <ul className="menu-list">
          <li>
            <a href="/rss.xml" target="_blank">
              <MenuEntryIcon icon="rss" /> RSS
            </a>
          </li>
        </ul>
        <p className="menu-label">Categories</p>
        <ul className="menu-list">
          {categories.group.map(c => (
            <li key={c.fieldValue}>
              <Link
                to={`/blog/categories/${c.fieldValue}`}
                activeClassName="is-active"
              >
                <Count className="tag is-rounded">{c.totalCount}</Count>{" "}
                {c.fieldValue}
              </Link>
            </li>
          ))}
        </ul>
        <p className="menu-label">Authors</p>
        <ul className="menu-list">
          {authors.group.map(a => (
            <li key={a.fieldValue}>
              <Link
                to={`/blog/authors/${a.fieldValue}`}
                activeClassName="is-active"
              >
                <Count className="tag is-rounded">{a.totalCount}</Count>{" "}
                {a.fieldValue}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default BlogSideNavigation;
