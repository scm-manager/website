import React, { FC } from "react";
import styled from "styled-components";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

export type FeatureProps = {
  textRight?: boolean;
};

const MobileReadyColumns = styled.div<{ isReversed?: boolean }>`
  flex-direction: ${props => (props.isReversed ? "row-reverse" : "inherit")};
  @media screen and (max-width: 768px) {
    padding: 1.5rem 0.5rem;
    flex-direction: column;
  }
`;

const Feature: FC<FeatureProps> = ({ children, textRight }) => {
  let text = null;
  let image = null;

  React.Children.forEach(children, child => {
    // @ts-ignore
    if (child.type === TextColumn || child.type.displayName === "TextColumn") {
      text = child;
    // @ts-ignore
    } else if (child.type === ImageColumn || child.type.displayName === "ImageColumn") {
      image = child;
    }
  });

  const columns = [];
  if (textRight) {
    columns.push(React.cloneElement(image, {
      alignRight: true,
      key: 1
    }));
    columns.push(React.cloneElement(text, {
      key: 2
    }));
  } else {
    columns.push(React.cloneElement(image, {
      key: 1
    }));
    columns.push(React.cloneElement(text, {
      alignRight: true,
      key: 2
    }));
  }

  return (
  <MobileReadyColumns className="columns is-vcentered" isReversed={!textRight}>
    {columns}
  </MobileReadyColumns>
)};

export default Feature;
