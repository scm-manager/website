import React, { FC } from "react";
import Column, { ColumnProps } from "./Column";
import Title from "../Title";

type Props = ColumnProps & {
  title: string;
};

const TextColumn: FC<Props> = ({ title, children, ...props }) => (
  <Column {...props}>
    <Title>{title}</Title>
    <p>{children}</p>
  </Column>
);

export default TextColumn;
