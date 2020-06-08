import React from "react";

import SEO from "../../components/SEO";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import PageContainer from "../../layout/PageContainer";
import BlogSideNavigation from "../../components/BlogSideNavigation";

const NotFoundPage = () => (
  <PageContainer>
    <SEO title="404: Not found" />
    <div className="columns">
      <div className="column is-three-quarters">
        <Title>Not Found</Title>
        <Subtitle>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Subtitle>
      </div>
      <BlogSideNavigation />
    </div>
  </PageContainer>
);

export default NotFoundPage;
