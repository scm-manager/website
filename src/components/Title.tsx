import React, { FunctionComponent } from "react";

type Props = {
  children: React.ReactNode;
};

const Title: FunctionComponent<Props> = ({ children }) => {
  return <h1 className="title has-text-weight-bold">{children}</h1>;
}

export default Title;
