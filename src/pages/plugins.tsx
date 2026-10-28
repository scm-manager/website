import React from "react";

import SEO from "../components/SEO";
import Page from "../layout/Page";
import Categories from "../components/plugins/Categories";

const IndexPage = () => (
  <Page>
    <SEO title="Plugins" description="Extend SCM-Manager with plugins for code review, CI integration, authentication, notifications and more. Browse all plugins by category." />
    <Categories />
  </Page>
);

export default IndexPage;
