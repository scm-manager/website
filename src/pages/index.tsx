import React from "react";

import SEO from "../components/SEO";
import Page from "../layout/Page";
import WelcomeSection from "../components/home/WelcomeSection";
import Categories from "../components/home/Categories";

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <WelcomeSection />
    <Categories />
  </Page>
);

export default IndexPage;
