import React from "react";
import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";

const AboutPage = () => (
  <Page>
    <SEO title="about" />
    <div className="container section">
      <div className="columns">
        <div className="column is-three-quarters">
          <Title>About</Title>
          <Subtitle>SCM-Manager Plugin Backend</Subtitle>
        </div>
      </div>
    </div>
  </Page>
);

export default AboutPage;
