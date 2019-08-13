import React, { FunctionComponent } from "react";
import styled from "styled-components"

const PageMain = styled.main`
flex: 1;
`;

type Props = {
  children: React.ReactNode
};

const Main: FunctionComponent<Props> = ({ children }) => {
  return (
    <PageMain className="app-content">
      {children}
    </PageMain>
  );
}

export default Main;
