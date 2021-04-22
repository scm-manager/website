import React, { FC } from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";
import MenuSection from "./MenuSection";
import MenuEntry from "./MenuEntry";
import { faRss } from "@fortawesome/free-solid-svg-icons";

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
      sort: { fields: [frontmatter___author___id] }
    ) {
      group(field: frontmatter___author___id) {
        fieldValue
        totalCount
      }
    }
  }
`;

const MenuEntryIcon = styled(FontAwesomeIcon)`
  width: 2rem !important;
  margin-right: 0.5rem;
`;

const BlogSideNavigation: FC = () => {
  const { categories, authors } = useStaticQuery(query);
  return (
    <div className="column is-one-quarter">
      <Menu>
        <MenuSection title="Special">
          <MenuEntry>
            <a href="/rss.xml" target="_blank">
              <MenuEntryIcon icon={faRss} /> RSS
            </a>
          </MenuEntry>
        </MenuSection>
        <MenuSection title="Categories">
          {categories.group.map(c => (
            <MenuEntry key={c.fieldValue}>
              <Link
                to={`/blog/categories/${c.fieldValue}`}
                activeClassName="is-active"
              >
                <Count className="tag is-rounded">{c.totalCount}</Count>{" "}
                {c.fieldValue}
              </Link>
            </MenuEntry>
          ))}
        </MenuSection>
        <MenuSection title="Authors">
          {authors.group.map(a => (
            <MenuEntry key={a.fieldValue}>
              <Link
                to={`/blog/authors/${a.fieldValue}`}
                activeClassName="is-active"
              >
                <Count className="tag is-rounded">{a.totalCount}</Count>{" "}
                {a.fieldValue}
              </Link>
            </MenuEntry>
          ))}
        </MenuSection>
      </Menu>
    </div>
  );
};

export default BlogSideNavigation;
