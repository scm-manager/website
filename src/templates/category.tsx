import React from "react";
import { graphql } from "gatsby";

import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Icon from "../components/Icon";
import Plugin from "../components/Plugin";
import SEO from "../components/SEO";
import styled from "styled-components";

const PluginList = styled.div`
  padding-top: 1.5rem;
`;

const Category = ({ data }) => {
  const category = data.category;
  if (!category) {
    return null;
  }

  let plugins = data.plugins;
  if (category.displayName === "All Plugins") {
    plugins = data.allPlugins;
  }

  return (
    <Page>
      <SEO title={"Category " + category.displayName} />
      <div className="container section is-category">
        <Title>
          <Icon className="has-text-info" icon={category.icon} inplace={true} />{" "}
          {category.displayName}
        </Title>
        <Subtitle>{category.description}</Subtitle>
        <PluginList className="content">
          {plugins.nodes.map(node => (
            <Plugin key={node.name} plugin={node} />
          ))}
        </PluginList>
      </div>
    </Page>
  );
};

export const query = graphql`
  query($name: String!) {
    category: categoriesYaml(name: { eq: $name }) {
      icon
      displayName
      description
    }
    allPlugins: allPluginYaml {
      nodes {
        name
        author
        displayName
        description
      }
    }
    plugins: allPluginYaml(
      filter: { category: { name: { eq: $name } } }
      sort: { fields: displayName }
    ) {
      nodes {
        name
        author
        displayName
        description
      }
    }
  }
`;

export default Category;
