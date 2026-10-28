import React, { FC } from "react";
import Column, { ColumnProps } from "./Column";
import Subtitle from "../Subtitle";

type Props = ColumnProps & {
  title: string;
};

const TextColumn: FC<Props> = ({ title, children, ...props }) => (
  <Column {...props}>
    <Subtitle className="has-text-weight-semibold is-size-4">{title}</Subtitle>
    <p>{children}</p>
  </Column>
);

export default TextColumn;
