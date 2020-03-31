import React, { FC } from "react";
import Column, { ColumnProps } from "./Column";

const ImageColumn: FC<ColumnProps> = ({ children, ...props }) => (
  <Column className="is-hidden-mobile" {...props}>
    {children}
  </Column>
);

export default ImageColumn;
