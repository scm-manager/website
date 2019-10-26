import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const createLabel = frontmatter => {
  return frontmatter.navigation ? frontmatter.navigation : frontmatter.title;
};

const createTitle = frontmatter => {
  return frontmatter.subtitle ? frontmatter.subtitle : frontmatter.title;
};

const createNavigationItems = (data) => {
  return [
    ...data.allMarkdownRemark.edges,
    ...data.allMdx.edges
  ].sort((a, b) => {
    return a.node.frontmatter.order - b.node.frontmatter.order;
  });
}

const DocNavigation = () => {
  const data = useStaticQuery(query);
  const items = createNavigationItems(data);
  return (
    <aside className="menu">
      <p className="menu-label">Documentation</p>
      <ul className="menu-list">
        {items.map(edge => (
          <li key={edge.node.fields.slug}>
            <Link
              to={edge.node.fields.slug}
              activeClassName="is-active"
              title={createTitle(edge.node.frontmatter)}
            >
              {createLabel(edge.node.frontmatter)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { slug: { glob: "/docs/**" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            order
            subtitle
            navigation
          }
        }
      }
    }
    allMdx(
      filter: { fields: { slug: { glob: "/docs/**" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            order
            subtitle
            navigation
          }
        }
      }
    }
  }
`;

export default DocNavigation;
