import React, { FC } from "react";

const Features: FC = ({ children }) => {
  const features = [];
  React.Children.forEach(children, (child, i) => {
    if (i % 2 === 0) {
      features.push(
        // @ts-ignore
        React.cloneElement(child, {
          textRight: true,
        })
      );
    } else {
      features.push(child);
    }
  });
  return <>{features}</>;
};

export default Features;
