import React, { FC } from "react";

type Props = {
  alignRight?: boolean;
};

const FeatureColumn: FC<Props> = ({ alignRight, children }) => (
  <div className={"column is-half section" + (alignRight ? " has-text-right" : "")}>
    {children}
  </div>
);

export default FeatureColumn;
