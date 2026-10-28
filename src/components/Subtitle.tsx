import React, { FunctionComponent } from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Subtitle: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <h2 className={classNames("subtitle", "is-spaced", className)}>
      {children}
    </h2>
  );
};

export default Subtitle;
