import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const createLabel = frontmatter => {
  return frontmatter.navigation ? frontmatter.navigation : frontmatter.title;
};

const createTitle = frontmatter => {
  return frontmatter.subtitle ? frontmatter.subtitle : frontmatter.title;
};

const DocNavigation = () => {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <aside className="menu">
      <p className="menu-label">Documentation</p>
      <ul className="menu-list">
        {data.allMarkdownRemark.edges.map(edge => (
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
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            navigation
          }
        }
      }
    }
  }
`;

export default DocNavigation;
