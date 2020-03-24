import React from "react";
import SEO from "../components/SEO";
import Page from "../layout/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Icon from "../components/Icon";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import {
  Docker,
  Kubernetes,
  Debian,
  Redhat,
  Linux,
  Windows,
  Apple,
  Helm,
  Openapiinitiative,
  ReactJs,
  Html5,
  Css3,
  Javascript,
  Redux,
  Reactrouter,
  Bulma,
  Jira,
  Jenkins,
  Bamboo,
  Gravatar,
  Git,
  Subversion,
  Opensourceinitiative,
} from "@icons-pack/react-simple-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconGroup = styled.div`
  & > * {
    margin: 0.2rem;
  }
`;

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
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <Title>SouceCode Management</Title>
              <p>
                SCM-Manager comes out of the box with support for Git, Mercurial
                and Subversion. All three types can be manageged the same way
                over one interface.
              </p>
            </div>
            <div className="column is-half">
              <IconGroup>
                <Git size="3em" />
                {/* TODO mercurial */}
                <Subversion size="3em" />
              </IconGroup>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <IconGroup>
                <Linux />
                <Redhat />
                <Debian />
                <Windows />
                <Apple />
              </IconGroup>
              <IconGroup>
                <Docker />
                <Kubernetes />
                <Helm />
              </IconGroup>
            </div>
            <div className="column is-half">
              <Title>Easy Installation</Title>
              <p>
                SCM-Manager can be installed on the platform where you want it.
                We are trying to make the installation on every platform as easy
                as possible.
              </p>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <Title>Simple configuration</Title>
              <p>
                SCM-Manager is completely configureable from its Web-Interface.
                There is no need to hack configuration files.
              </p>
            </div>
            <div className="column is-half">
              <FontAwesomeIcon icon="file-code" size="4x" />
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <FontAwesomeIcon icon="project-diagram" size="4x" />
            </div>
            <div className="column is-half">
              <Title>No dependencies</Title>
              <p>
                No webservers, databases or caches are required. SCM-Manager is
                very lightweight and does not force you to install a ton of
                infrastructure components.
              </p>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <Title>Authentication</Title>
              <p>
                SCM-Manager comes with an very flexible authentication
                mechanism. You can configure the authentication mechanism which
                are you need or use the embedded one.
              </p>
            </div>
            <div className="column is-half">
              <FontAwesomeIcon icon="users" size="4x" />
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <FontAwesomeIcon icon="users-cog" size="4x" />
            </div>
            <div className="column is-half">
              <Title>Authorization</Title>
              <p>
                SCM-Manager provides a fine grained authorization model. Give
                users or groups of users exactly the permissions the need.
              </p>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <Title>REST API</Title>
              <p>
                We provide you a rich{" "}
                <a href="https://martinfowler.com/articles/richardsonMaturityModel.html">
                  Level 3 RESTful WebService
                </a>{" "}
                for every funktion of SCM-Manager. This makes it easy to
                integrate with your internal processes.
              </p>
            </div>
            <div className="column is-half">
              <Openapiinitiative size="4em" />
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <IconGroup>
                <Html5 />
                <Css3 />
                <Javascript />
              </IconGroup>
              <IconGroup>
                <ReactJs />
                <Redux />
                <Reactrouter />
                <Bulma />
              </IconGroup>
            </div>
            <div className="column is-half">
              <Title>User Interface</Title>
              <p>
                SCM-Manager comes with a nice looking rich user interface, which
                provides you with a smooth user experience.
              </p>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <Title>Plugins</Title>
              <p>
                We provide you a lot of useful plugins from a wide range of
                categories out of the box.
              </p>
            </div>
            <div className="column is-half">
              <IconGroup>
                <Jira />
                <Jenkins />
                <Windows />
                <Linux />
              </IconGroup>
              <IconGroup>
                <Bamboo />
                <Gravatar />
                <Git />
                <Subversion />
              </IconGroup>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <FontAwesomeIcon icon="puzzle-piece" size="4x" />
            </div>
            <div className="column is-half">
              <Title>Extensible</Title>
              <p>
                SCM-Manager can be easily extended with its simple plugin api.
              </p>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half has-text-right">
              <Title>OpenSource</Title>
              <p>
                SCM-Manager is free and licensed under the MIT OpenSource
                license.
              </p>
            </div>
            <div className="column is-half">
              <Opensourceinitiative size="4em" />
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default IndexPage;
