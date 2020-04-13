import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import NavigationSettings from "./NavigationSettings";
import Menu from "./Menu";

const createLabel = frontmatter => {
  return frontmatter.navigation ? frontmatter.navigation : frontmatter.title;
};

const createTitle = frontmatter => {
  return frontmatter.subtitle ? frontmatter.subtitle : frontmatter.title;
};

type Props = {
  path: string;
  navigation: any;
};

const DocNavigation: FC<Props> = ({ path, navigation }) => {
  return (
    <Menu>
      <NavigationSettings path={path} />
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
    </Menu>
  );
};

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
