import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Category } from "../../types/category";
import CategoryCard from "./CategoryCard";
import Title from "../Title";
import Subtitle from "../Subtitle";

const createRows = (categories: Category[]) => {
  if (!categories || categories.length === 0) {
    return [];
  }
  const sorted = categories.sort((left, right) => {
    return left.displayName.localeCompare(right.displayName);
  });

  const rows = [];
  let columns: Category[] | null = null;
  for (let i = 0; i < sorted.length; i++) {
    if (i % 3 === 0 || !columns) {
      columns = [];
      rows.push(columns);
    }
    columns.push(sorted[i]);
  }
  return rows;
};

const renderRows = (rows: Category[][]) => {
  if (rows.length === 0) {
    return <div className="notification is-info">No categories found</div>;
  }

  return rows.map((categories, index) => {
    return (
      <div key={index} className="columns">
        {categories.map(category => {
          return <CategoryCard key={category.name} category={category} />;
        })}
      </div>
    );
  });
};

const Categories = () => {
  const data = useStaticQuery(graphql`
    {
      allCategoriesYaml(sort: { fields: displayName }) {
        nodes {
          icon
          name
          displayName
          description
        }
      }
    }
  `);

  const rows = createRows(data.allCategoriesYaml.nodes);
  return (
    <section className="section">
      <div className="container categories">
        <Title>
          <a id="categories"></a>Categories
        </Title>
        <Subtitle>SCM-Manager v2 Plugin categories</Subtitle>
        {renderRows(rows)}
      </div>
    </section>
  );
};

export default Categories;
