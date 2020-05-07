import React from "react";
import { graphql, Link } from "gatsby";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import HtmlContent from "../layout/HtmlContent";
import PageContainer from "../layout/PageContainer";
import TableOfContents from "../layout/TableOfContents";
import DocNavigation from "../components/DocNavigation";
import MenuSection from "../components/MenuSection";
import MenuEntry from "../components/MenuEntry";

const renderToc = page => {
  if (page.frontmatter.displayToc) {
    return <TableOfContents content={page.tableOfContents} />;
  }
  return null;
};

const Navigation = ({ plugin, version, language }) => {
  return (
    <MenuSection title="Navigation">
      <MenuEntry>
        <Link to={`/plugins/${plugin}/`}>Back to overview</Link>
        <Link
          activeClassName="is-active"
          to={`/plugins/${plugin}/docs/${version}/${language}/`}
          partiallyActive={false}
        >
          Documentation root
        </Link>
      </MenuEntry>
    </MenuSection>
  );
};

const PluginDocs = ({ data, path, pageContext }) => {
  return (
    <PageContainer>
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <Subtitle>{data.markdownRemark.frontmatter.subtitle}</Subtitle>
          {renderToc(data.markdownRemark)}
          <HtmlContent content={data.markdownRemark.html} />
        </div>
        <div className="column is-one-quarter">
          <DocNavigation
            path={path}
            afterSettings={
              <Navigation
                plugin={data.plugin.name}
                version={pageContext.version}
                language={pageContext.language}
              />
            }
            navigation={data.navigation}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query($name: String!, $version: String!, $language: String!, $slug: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      name
      displayName
      description
      author
      documentation {
        version
        languages
      }
    }
    navigation: allNavigationYaml(
      filter: {
        fields: {
          plugin: { eq: $name }
          version: { eq: $version }
          language: { eq: $language }
        }
      }
    ) {
      ...DocNavigation
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        subtitle
        displayToc
      }
    }
  }
`;

export default PluginDocs;
