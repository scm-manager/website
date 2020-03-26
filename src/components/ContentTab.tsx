import React, { FC } from "react";
import styled from "styled-components";
import { TabProps } from "./Tab";

const Container = styled.div`
  margin-top: 1rem;
`;

const ContentTab: FC<TabProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentTab;
