import React from "react";

import SEO from "../components/SEO";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import PageContainer from "../layout/PageContainer";

const NotFoundPage = () => (
  <PageContainer>
    <SEO title="404: Not found" />
    <Title>Not Found</Title>
    <Subtitle>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Subtitle>
  </PageContainer>
);

export default NotFoundPage;
