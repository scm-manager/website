import React from "react";

import SEO from "../../components/SEO";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import PageContainer from "../../layout/PageContainer";


const NotFoundPage = () => (
  <PageContainer>
    <SEO title="404: Not found" />
    <Title>Not Found</Title>
    <div className = "columns">
      <div className="column is-three-quarters">
        <Subtitle>
         You just hit a route that doesn&#39;t exist... the sadness.
       </Subtitle>
       <div>
         <p>
           Did you try to access documentation that ist not yet translated? You can help! Head over to <a href="https://github.com/scm-manager/scm-manager/tree/develop/docs">the docs-pages on github</a> and help make the SCM-Manager a better documented tool!
          </p>
        </div>
      </div>
      <div className="column is-one-quarter">
      </div>
    </div>
  </PageContainer>
);

export default NotFoundPage;
