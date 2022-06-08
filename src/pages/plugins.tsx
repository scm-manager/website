import React from "react";

import SEO from "../components/SEO";
import Page from "../layout/Page";
import Categories from "../components/plugins/Categories";

const IndexPage = () => (
  <Page>
    <SEO title="Plugins" />
    <Categories />
  </Page>
);

export default IndexPage;
