import React, { FunctionComponent } from "react";

type Props = {
  children: React.ReactNode;
};

const Subtitle: FunctionComponent<Props> = ({ children }) => {
  return <h2 className="subtitle is-spaced">{children}</h2>;
}

export default Subtitle;
