import React from "react";

import SEO from "../components/SEO";
import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <div className="container section">
      <Title>Not Found</Title>
      <Subtitle>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Subtitle>
    </div>
  </Page>
);

export default NotFoundPage;
