import React from "react";
import { graphql } from "gatsby";

import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Icon from "../components/Icon";
import Plugin from "../components/Plugin";
import SEO from "../components/SEO";

const Category = ({ data }) => {
  const categories = data.categories.nodes;
  if (!categories) {
    return null;
  }
  const category = categories[0];
  return (
    <Page>
      <SEO title={"Category " + category.displayName} />
      <div className="container section is-category">
        <Title>
          <Icon className="has-text-info" icon={category.icon} inplace={true} />{" "}
          {category.displayName}
        </Title>
        <Subtitle>{category.description}</Subtitle>
      </div>
      <div className="container section is-category">
        <div className="content">
          {data.plugins.nodes.map(node => (
            <Plugin key={node.name} plugin={node} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export const query = graphql`
  query($name: String!) {
    categories: allCategoriesYaml(filter: { name: { eq: $name } }) {
      nodes {
        icon
        displayName
        description
      }
    }
    plugins: allPluginYaml(filter: { category: { name: { eq: $name } } }) {
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
