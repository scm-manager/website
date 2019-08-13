import * as React from "react";
import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

type Props = {
  children: React.ReactNode;
};

const Page: React.FunctionComponent<Props> = ({ children }) => (
  <PageWrapper>
    <Header />
    <Main>
      <section>{children}</section>
    </Main>
    <Footer />
  </PageWrapper>
);

export default Page;
