import React, { FC } from "react";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

export type FeatureProps = {
  textRight?: boolean;
};

const Feature: FC<FeatureProps> = ({ children, textRight }) => {
  let text = null;
  let image = null;

  React.Children.forEach(children, child => {
    // @ts-ignore
    if (child.type === TextColumn) {
      text = child;
    // @ts-ignore
    } else if (child.type === ImageColumn) {
      image = child;
    }
  });

  const columns = [];
  if (textRight) {
    columns.push(React.cloneElement(image, {
      alignRight: true
    }));
    columns.push(text);
  } else {
    columns.push(React.cloneElement(text, {
      alignRight: true
    }));
    columns.push(image);
  }

  return (
  <div className="columns is-vcentered">
    {columns}
  </div>
)};

export default Feature;
