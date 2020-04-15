import React, { FC } from "react";
import styled from "styled-components";

export type ColumnProps = {
  alignRight?: boolean;
  className?: string;
};

const MobileReadyColumn = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Column: FC<ColumnProps> = ({ alignRight, className, children }) => {
  let classes = "column section";
  if (alignRight) {
    classes += " has-text-right-tablet";
  }
  if (className) {
    classes += " " + className;
  }
  return <MobileReadyColumn className={classes}>{children}</MobileReadyColumn>;
};

export default Column;
