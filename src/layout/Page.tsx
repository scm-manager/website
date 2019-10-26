import * as React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import MdxCodeBlock from "../components/MdxCodeBlock";

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

type Props = {
  children: React.ReactNode;
};

const components = {
  code: MdxCodeBlock,
  pre: ({ children }) => <>{children}</>,
};

const Page: React.FunctionComponent<Props> = ({ children }) => (
  <PageWrapper>
    <Header />
    <MDXProvider components={components}>
      <Main>{children}</Main>
    </MDXProvider>
    <Footer />
  </PageWrapper>
);

export default Page;
