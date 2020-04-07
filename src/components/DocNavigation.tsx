import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

const createLabel = frontmatter => {
  return frontmatter.navigation ? frontmatter.navigation : frontmatter.title;
};

const createTitle = frontmatter => {
  return frontmatter.subtitle ? frontmatter.subtitle : frontmatter.title;
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

const DocNavigation = ({ navigation }) => (
  <aside className="menu">
    <p className="menu-label">Settings</p>
    <Setting label="Version" options={["2.0.x", "1.60.x"]} />
    <Setting label="Language" options={["English", "Deutsch"]} />
    {navigation.nodes.map(node => (
      <React.Fragment key={node.section}>
        <p className="menu-label">{node.section}</p>
        <ul className="menu-list">
          {node.entries.map(entry => {
            return (
              <li key={entry.fields.slug}>
                <Link
                  to={entry.fields.slug}
                  activeClassName="is-active"
                  title={createTitle(entry.frontmatter)}
                  partiallyActive={entry.frontmatter.partiallyActive}
                >
                  {createLabel(entry.frontmatter)}
                </Link>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    ))}
  </aside>
);

export const docNavigationFragment = graphql`
  fragment DocNavigation on NavigationYamlConnection {
    nodes {
      section
      entries {
        frontmatter {
          title
          subtitle
          partiallyActive
        }
        fields {
          slug
        }
      }
    }
  }
`;
export default DocNavigation;
