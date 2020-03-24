import React from "react";
import SEO from "../components/SEO";
import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import {
  SourceCodeManagement,
  EasyInstallation,
  SimpleConfiguration,
  NoDependencies,
  Authentication,
  Authorization,
  RestApi,
  UserInterface,
  Plugins,
  Extensible,
  OpenSource,
} from "../components/features";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/scm-manager_logo_img.png" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Page>
      <SEO title="Home" />
      <section className="hero is-welcome">
        <div className="container hero-body">
          <div className="columns is-vcentered has-text-centered">
            <div className="column is-8">
              <Title>SCM-Manager</Title>
              <Subtitle>
                The easiest way to share and manage your Git, Mercurial and
                Subversion repositories
              </Subtitle>
            </div>
            <div className="column is-4">
              <Img
                alt="SCM-Manager Logo"
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="container hero-body">
          <SourceCodeManagement />
          <EasyInstallation />
          <SimpleConfiguration />
          <NoDependencies />
          <Authentication />
          <Authorization />
          <RestApi />
          <UserInterface />
          <Plugins />
          <Extensible />
          <OpenSource />
        </div>
      </section>
    </Page>
  );
};

export default IndexPage;
