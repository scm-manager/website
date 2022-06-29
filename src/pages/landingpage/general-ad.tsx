import React from "react";
import SEO from "../../components/SEO";
import Page from "../../layout/Page";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { GatsbyImage } from "gatsby-plugin-image";
import { Screenshot } from '../../../static/img/collapsed_directories.png';
import { useStaticQuery, graphql, Link } from "gatsby";
import {
  Features,
} from "../../components/features";
import styled from "styled-components";
import useLatestRelease from "../../hooks/useLatestRelease";

const Landingpage = () => {
  const release = useLatestRelease();
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "images/collapsed_directories.png"}) {
    childImageSharp {
      gatsbyImageData(width: 256, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`);

const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2.5rem; 
  font-weight:700;
  color: hsl(0deg, 0%, 21%);
  line-height: 1.125;
`;
const Subtitle = styled.h2`
  color: hsl(0deg, 0%, 29%);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2rem;
`;
const Video = styled.div`
  margin: 0; 
  outline: none; 
  margin-bottom: 1.1428571429rem; 
  overflow: hidden; 
  position: relative; 
  padding: 0; 
  height: auto; 
  background-color: #fff;
`;
const Iframe = styled.iframe`
    border-width: 0px;
    top: 0;
    left: 0;
    display: block;
    margin: auto;
    position: relative;
    height: 320px;
    width: 570px;
`;

  return (
    <Page>
      <SEO title="Home" />
      <section className="hero is-welcome">
        <div className="container hero-body">
          <div className="columns is-vcentered">
            <div className="column is-one-half-tablet">
                <h1 className="title is-2 has-text-weight-bold">Full control over your source code management</h1>
              <Subtitle>
                With SCM-Manager you manage your source code for Git, Mercurial and Subversion in your own infrastructure. Completely free thanks to our open source approach.
              </Subtitle>
              <Link className="button is-primary is-large mt-6" to="/download">
                Download SCM Manager now
              </Link>
            </div>
            <div className="column">
              <Video>
                <Iframe src="https://www.youtube-nocookie.com/embed/jm4arazJ_VU?rel=0" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""
                        enablejsapi="true" id="widget2"></Iframe>
              </Video>
            </div>
          </div>
        </div>
      </section>
      {/*  Feature Lightweight */}
      <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column has-text-centered">
                  <h2 className="title is-3 mb-5">Lightweight and flexible</h2>
                </div>
              </div>
              <div className="columns is-multiline is-variable is-8 is-centered" >
                <div className="column is-half">
                  <div className="has-full-height mb-6">
                    <div className="has-text-centered">
                      <div className="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" viewBox="0 0 24 24"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path></svg>
                      </div>
                      <h3 className="title is-5 has-text-weight-bold pb-3">
                        No unnecessary weight
                      </h3>
                      <p className="subtitle">
                        The lean core of the SCM-Manager is fully focused on its core task: repository management.</p>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="has-full-height mb-6">
                    <div className="has-text-centered">
                      <div className="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" viewBox="0 0 24 24"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path></svg>
                      </div>
                      <h3 className="title is-5 has-text-weight-bold pb-3">
                        Quickly extendable
                      </h3>
                      <p className="subtitle">
                        Over 50 plugins add target-oriented new functions, e.g. for workflow-controlled code reviews</p>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="has-full-height mb-6">
                    <div className="has-text-centered">
                      <div className="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" viewBox="0 0 24 24"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path></svg>
                      </div>
                      <h3 className="title is-5 has-text-weight-bold pb-3">
                        Simple integration
                      </h3>
                      <p className="subtitle">
                        Easily connect the SCM Manager to existing systems (e.g. project management software or CI/CD pipelines)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="has-full-height mb-6">
                    <div className="has-text-centered">
                      <div className="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" viewBox="0 0 24 24"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path></svg>
                      </div>
                      <h3 className="title is-5 has-text-weight-bold pb-3">
                        Free platform choice
                      </h3>
                      <p className="subtitle">
                        No matter if Linux, Windows, macOS or container - a convenient installer prepares your instance in no time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
      {/*  Feature Independance  */}
      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-vcentered" >
            <div className="column is-half">
              <img className="image is-16by9 has-background-white mr-3" src={Screenshot} alt="Example screenshot" />
            </div>
            <div className="column">
              <h2 className="title is-3 mb-5">Stay independent</h2>
              <div className="has-full-height content is-medium">
                <ul className="ml-5">
                <li>SCM Manager is <b>free for commercial and personal use</b> – regardless of the size of your team.
                </li>
                <li>
                  <b>100% open source</b> under MIT license.
                </li>
                <li>
                  <b>No external dependencies:</b> You don't need databases or additional webservers.
                </li>
                <li>
                  <b>No cloud requirements:</b> Self-hosting is possible on many platforms.
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Feature Individual  */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered" >
            <div className="column is-half">
              <h2 className="title is-3 mb-5">Functionalities tailored to your needs</h2>
              <div className="has-full-height content is-medium">
                <ul className="ml-5">
                <li><b>Over 50 ready-to-use plugins</b> for many different purposes available.
                </li>
                <li>
                  Possibility to <b>add your own plugins</b> for your individual requirements.
                </li>
                <li>
                  <b>Extensive plugin API</b> makes development easy and comfortable.
                </li>
                <li>
                  Detailed documentation, tutorial and help from the community – Start developing now!
                </li>
                </ul>
              </div>
            </div>
            <div className="column is-half">
              <img className="image is-16by9 has-background-light ml-3" src={Screenshot} alt="Example screenshot" />
            </div>
          </div>
          <div className="columns">
            <div className="column is-full has-text-centered">
              <Link className="button is-primary is-large mt-6" to="/download">
                Download SCM Manager now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )};

export default Landingpage;


