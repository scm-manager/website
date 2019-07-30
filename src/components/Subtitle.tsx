import React, { FunctionComponent } from "react";

type Props = {
  children: React.ReactNode;
};

const Subtitle: FunctionComponent<Props> = ({ children }) => {
  return <h1 className="subtitle">{children}</h1>;
}

export default Subtitle;
