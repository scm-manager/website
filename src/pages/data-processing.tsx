import React from "react";

import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";
import Title from "../components/Title";

const PrivacyPage = () => (
  <PageContainer>
    <SEO title="Data Processing" />
    <Title>Data Processing</Title>
    <div className="columns">
      <div className="column is-three-quarters">
        <p>
          We aim to inform you about the data processing in connection with your installed SCM-Manager and related services.
        </p>
        <p>&nbsp;</p>
        <p>
          If you authenticate your SCM-Manager installation, your SCM-Manager only stores the refresh token from myCloudogu (my.cloudogu.com) on your server and sends this to the plugin center. Here it's used to verify the login. During this process, the plugin center gets a token with your user id and your name used in myCloudogu, but this is not evaluated and not stored in the plugin center (the tokens are just passed through to myCloudogu). There is no other data sent with a connection to myCloudogu.
        </p>
      </div>
    </div>
  </PageContainer>
);

export default PrivacyPage;
