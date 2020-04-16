import React, { FC } from "react";
import Column, { ColumnProps } from "./Column";

const ImageColumn: FC<ColumnProps> = ({ children, ...props }) => (
  <Column {...props}>
    {children}
  </Column>
);

export default ImageColumn;
