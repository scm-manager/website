import React, { FC, ReactNode } from "react";
import { graphql, Link } from "gatsby";
import NavigationSettings from "./NavigationSettings";
import Menu from "./Menu";
import MenuSection from "./MenuSection";
import MenuEntry from "./MenuEntry";

const createLabel = frontmatter => {
  return frontmatter.navigation ? frontmatter.navigation : frontmatter.title;
};

const createTitle = frontmatter => {
  return frontmatter.subtitle ? frontmatter.subtitle : frontmatter.title;
};

type Props = {
  path: string;
  afterSettings?: ReactNode;
  navigation: any;
  languagePathIndex: number;
  versionPathIndex: number;
  versions: { group: { fieldValue: string }[] };
  languages: { group: { fieldValue: string }[] };
};

const DocNavigation: FC<Props> = ({ path, languagePathIndex, versionPathIndex, afterSettings, navigation, versions, languages }) => {
  return (
    <Menu>
      <NavigationSettings path={path} versions={versions} languages={languages} languagePathIndex={languagePathIndex} versionPathIndex={versionPathIndex} />
      {afterSettings}
      {navigation.nodes.map(node => (
        <MenuSection key={node.section} title={node.section}>
          {node.entries.map(entry => {
            return (
              <MenuEntry key={entry.fields.slug}>
                <Link
                  to={entry.fields.slug}
                  activeClassName="is-active"
                  title={createTitle(entry.frontmatter)}
                  partiallyActive={entry.frontmatter.partiallyActive}
                >
                  {createLabel(entry.frontmatter)}
                </Link>
              </MenuEntry>
            );
          })}
        </MenuSection>
      ))}
    </Menu>
  );
};

DocNavigation.defaultProps = {
  afterSettings: null
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
