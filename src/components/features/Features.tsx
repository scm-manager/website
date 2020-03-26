import React, { FC } from "react";

const Features: FC = ({ children }) => {
   const features = React.Children.map(children, (child, i) => {
    // @ts-ignore
    return React.cloneElement(child,  {
      key: i,
      textRight: i % 2 === 0
    });
  });
  return <>{features}</>;
};

export default Features;
