import * as React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Page: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    <Main>
      <section className="section container">{children}</section>
    </Main>
    <Footer />
  </>
);

export default Page;
