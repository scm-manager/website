import React from "react";
import { graphql } from "gatsby";

import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Icon from "../components/Icon";
import Plugin from "../components/Plugin";
import SEO from "../components/SEO";

const Category = ({ data }) => {
  const categories = data.allCategoriesYaml.nodes;
  if (!categories) {
    return null;
  }
  const category = categories[0];
  return (
    <Page>
      <SEO title={"Category " + category.displayName} />
      <Title>
        <Icon icon={category.icon} inplace={true} /> {category.displayName}
      </Title>
      <Subtitle>{category.description}</Subtitle>
      <div>
        { data.allMarkdownRemark.nodes.map(node => <Plugin key={node.frontmatter.name} plugin={node.frontmatter} /> )}
      </div>
    </Page>
  );
};

export const query = graphql`
  query($name: String!) {
    allCategoriesYaml(filter: { 
      name: { 
        eq: $name 
      }
    }){
      nodes {
        icon
        displayName
        description
      }
    }
    allMarkdownRemark(filter: {
      frontmatter: {
        category: {
          eq: $name
        }
      }
    }) {
      nodes {
        frontmatter {
          name
          author
          displayName
          description
        }
      }
    }
  }
`;

export default Category;
