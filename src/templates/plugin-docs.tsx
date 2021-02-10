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
import { PATH_PART_INDEX_PLUGIN_LANGUAGE, PATH_PART_INDEX_PLUGIN_VERSION } from "../components/NavigationSettings";
import SEO from "../components/SEO";
import CanonicalLink from "../components/CanonicalLink";

const renderToc = page => {
  if (page.frontmatter.displayToc) {
    return <TableOfContents content={page.tableOfContents}/>;
  }
  return null;
};

const canonicalPath = (path) => {
  let pathParts = path.split("/");
  pathParts.shift();
  pathParts.shift();
  pathParts.shift();
  pathParts.shift();
  pathParts.shift();
  return pathParts.join("/");
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
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description || data.markdownRemark.description}
        keywords={data.markdownRemark.frontmatter.keywords}
      />
      {!pageContext.isLatest ?
        <CanonicalLink path={`plugins/${data.plugin.name}/docs/latest/${canonicalPath(path)}`}/> : null}
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <Subtitle>{data.markdownRemark.frontmatter.subtitle}</Subtitle>
          {renderToc(data.markdownRemark)}
          <HtmlContent content={data.markdownRemark.html}/>
        </div>
        <div className="column is-one-quarter">
          <DocNavigation
            path={path}
            versions={data.versions}
            languages={data.languages}
            versionPathIndex={PATH_PART_INDEX_PLUGIN_VERSION}
            languagePathIndex={PATH_PART_INDEX_PLUGIN_LANGUAGE}
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
    versions: allMarkdownRemark(filter: { fields: { plugin: { eq: $name } } }) {
      group(field: fields___version) {
        fieldValue
      }
    }
    languages: allMarkdownRemark(filter: { fields: { plugin: { eq: $name }, version: { eq: $version } } }) {
      group(field: fields___language) {
        fieldValue
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      description: excerpt(pruneLength: 160)
      tableOfContents
      frontmatter {
        title
        subtitle
        description
        keywords
        displayToc
        image: featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`;

export default PluginDocs;
