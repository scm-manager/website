import React from "react";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";

const AboutPage = () => (
  <PageContainer>
    <SEO title="about" />
    <Title>About</Title>
    <Subtitle>SCM-Manager Plugin Backend</Subtitle>
  </PageContainer>
);

export default AboutPage;
