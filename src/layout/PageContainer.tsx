import React, {FC} from "react";
import Page from "./Page";

type Props = {};

const PageContainer: FC<Props> = ({children}) => (
  <Page>
    <section className="section container">
      {children}
    </section>
  </Page>
);

export default PageContainer;
