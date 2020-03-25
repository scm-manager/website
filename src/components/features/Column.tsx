import React, { FC } from "react";

export type ColumnProps = {
  alignRight?: boolean;
};

const Column: FC<ColumnProps> = ({ children, alignRight }) => (
  <div className={"column is-half section" + (alignRight ? " has-text-right" : "")}>
    {children}
  </div>
);

export default Column;
