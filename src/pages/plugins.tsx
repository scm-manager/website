import React from "react";

import SEO from "../components/SEO";
import Page from "../layout/Page";
import WelcomeSection from "../components/plugins/WelcomeSection";
import Categories from "../components/plugins/Categories";

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <WelcomeSection />
    <Categories />
  </Page>
);

export default IndexPage;
