import React from "react";
import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";

const AboutPage = () => (
  <Page>
    <SEO title="about" />
    <Title>About</Title>
    <Subtitle>SCM-Manager Plugin Backend</Subtitle>
  </Page>
);

export default AboutPage;
