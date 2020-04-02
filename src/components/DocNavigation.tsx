import React, { FC } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const createLabel = frontmatter => {
  return frontmatter.navigation ? frontmatter.navigation : frontmatter.title;
};

const createTitle = frontmatter => {
  return frontmatter.subtitle ? frontmatter.subtitle : frontmatter.title;
};

const createNavigationItems = data => {
  const items = {};
  [...data.allMarkdownRemark.edges, ...data.allMdx.edges].forEach(edge => {
    items[edge.node.fields.slug] = {
      ...edge.node.frontmatter,
      slug: edge.node.fields.slug,
    };
  });
  return items;
};

const Label = styled.label`
  padding-left: 0.75rem;
`;

type SettingProps = {
  label: string;
  options: string[];
};

const Setting: FC<SettingProps> = ({ label, options }) => (
  <div className="columns is-horizontal field">
    <div className="field-label column has-text-left is-one-third is-vcentered">
      <Label>{label}</Label>
    </div>
    <div className="field-body column">
      <div className="field">
        <div className="control">
          <div className="select is-fullwidth">
            <select className="is-fullwidth">
              {options.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DocNavigation = () => {
  const data = useStaticQuery(query);
  const items = createNavigationItems(data);
  return (
    <aside className="menu">
      <p className="menu-label">Settings</p>
      <Setting label="Version" options={["2.0.x", "1.60.x"]} />
      <Setting label="Language" options={["English", "Deutsch"]} />
      {data.allNavigationYaml.nodes.map(node => (
        <React.Fragment key={node.section}>
          <p className="menu-label">{node.section}</p>
          <ul className="menu-list">
            {node.entries
              .map(entry => items["/docs" + entry])
              .filter(node => !!node)
              .map(node => {
                return (
                  <li key={node.slug}>
                    <Link
                      to={node.slug}
                      activeClassName="is-active"
                      title={createTitle(node)}
                      partiallyActive={node.partiallyActive}
                    >
                      {createLabel(node)}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </React.Fragment>
      ))}
    </aside>
  );
};

const query = graphql`
  {
    allNavigationYaml {
      nodes {
        section
        entries
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { glob: "/docs/**" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
          }
        }
      }
    }
    allMdx(filter: { fields: { slug: { glob: "/docs/**" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            partiallyActive
          }
        }
      }
    }
  }
`;

export default DocNavigation;
