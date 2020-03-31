import React, { FC } from "react";

export type ColumnProps = {
  alignRight?: boolean;
  className?: string;
};

const Column: FC<ColumnProps> = ({ alignRight, className, children }) => {
  let classes = "column section";
  if (alignRight) {
    classes += " has-text-right-tablet";
  }
  if (className) {
    classes += " " + className;
  }
  return <div className={classes}>{children}</div>;
};

export default Column;
