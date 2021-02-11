import React, { FC } from "react";
// import { graphql, PageProps } from "gatsby";

import SEO from "../../components/SEO";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
// import DocNavigation from "../../components/DocNavigation";
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
           Did you try to access documentation that ist not yet translated? You can help! Head over to <a href="">Seite</a> and help make the SCM-Manager a better documented tool!
          </p>
        </div>
      </div>
      <div className="column is-one-quarter">
        {/*<DocNavigation versions={data.versions} languages={"en"} path={path} navigation={data.navigation} versionPathIndex={PATH_PART_INDEX_DOCS_VERSION} languagePathIndex={PATH_PART_INDEX_DOCS_LANGUAGE} />*/}
      </div>
    </div>
  </PageContainer>
);

export default NotFoundPage;
