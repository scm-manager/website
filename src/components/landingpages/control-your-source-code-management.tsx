import React from "react";
import SEO from "../../components/SEO";
import Page from "../../layout/Page";
import Subtitle from "../../components/Subtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Screenshot from '../../styles/assets/scm-screenshots.png';
import Plugins from '../../styles/assets/scm-plugins.png';
import { useStaticQuery, graphql, Link } from "gatsby";
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
    position: relative;
    height: 320px;
    width: 570px;
    max-width: 100%;
`;
const SVG = styled.svg`
    margin: auto;
    background: #00d0b31a;
    border-radius: 100%;
    padding: 15px;
`;
const SVGBorder = styled.div`
    border: 1px solid #00527f;
    border-radius: 100%;
    width: 6.5rem;
    height: 6.5rem;
    margin: auto;
    display: flex;
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
                Download SCM-Manager now
              </Link>
            </div>
            <div className="column">
              <div className="pt-6 is-hidden-tablet"></div>
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
              <div className="columns is-multiline is-variable is-4-desktop is-centered" >
                <div className="column is-one-quarter-desktop is-half-tablet">
                  <div className="card has-full-height">
                    <div className="card-content has-text-centered">
                      <div className="mb-5">
                        <SVGBorder>
                          <SVG xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 48 48" fill="#005281">
                          <path d="M45.5,28.6c-1.5-0.5-16.2-8.8-16.2-8.8c-1.3-0.3-3.5,1.4-5.3,3c0,0,0.8-3,2.5-4.1c-6.5-3.9-13.7-0.6-14.1-0.5
                            c-5.4-3.2-8.5-6-9.1-5.8c-3.8,1.3,7.6,7.6,7.6,7.6c4.7,3,12.5,7.4,18.1,9.5c-6.5,0.6-14-5.5-18.3-7.9C9.9,30.8,20.2,34.5,28,35.5
                            C35.2,35.8,43.8,32.6,45.5,28.6z"/>
                        </SVG>
                        </SVGBorder>
                      </div>
                      <h3 className="title is-5 has-text-weight-bold pb-3">
                        No unnecessary weight
                      </h3>
                      <p className="subtitle">
                        The lean core of the SCM-Manager is fully focused on its core task: repository management.</p>
                    </div>
                  </div>
                </div>
                <div className="column is-one-quarter-desktop is-half-tablet">
                  <div className="card has-full-height">
                    <div className="card-content has-text-centered">
                      <div className="mb-5">
                        <SVGBorder>
                        <SVG xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 48 48" fill="#005281">
                            <path d="M18,40H9.6c-0.4,0-0.8-0.2-1.1-0.5C8.2,39.2,8,38.9,8,38.5V30c1.1-0.4,1.9-1,2.6-2s1.1-2,1.1-3.1
                            c0-1.2-0.4-2.2-1.1-3.1s-1.6-1.6-2.6-2v-8.4c0-0.4,0.2-0.8,0.4-1.1C8.8,10,9.1,9.8,9.6,9.8h8.4c0.5-1.1,1.2-2,2.1-2.6
                            s1.9-0.9,3.1-0.9c1.1,0,2.1,0.3,3,0.9c0.9,0.6,1.6,1.5,2.2,2.6h8.4c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1v8.4
                            c1.1,0.5,2,1.3,2.6,2.2c0.6,0.9,1,2,1,3.1c0,1.1-0.3,2.1-1,3c-0.6,0.9-1.5,1.6-2.6,2.1v8.4c0,0.4-0.2,0.8-0.5,1.1
                            c-0.3,0.3-0.7,0.5-1.1,0.5h-8.5c-0.4-1.2-1.1-2.1-2.1-2.7c-0.9-0.7-2-1-3.1-1c-1.1,0-2.1,0.3-3,1C19.1,37.9,18.4,38.8,18,40z"/>
                        </SVG>
                        </SVGBorder>
                      </div>
                      <h3 className="title is-5 has-text-weight-bold pb-3">
                        Quickly extendable
                      </h3>
                      <p className="subtitle">
                        Over 50 plugins add target-oriented new functions, e.g. for workflow-controlled code reviews.</p>
                    </div>
                  </div>
                </div>
                <div className="column is-one-quarter-desktop is-two-quarters-tablet">
                  <div className="card has-full-height">
                    <div className="card-content has-text-centered">
                      <div className="mb-5">
                        <SVGBorder>
                        <SVG xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 48 48" fill="#005281">
                          <path d="M8.5,37c-1.2,0-2.3-0.4-3.2-1.3c-0.9-0.9-1.3-2-1.3-3.2c0-1.3,0.4-2.3,1.3-3.2c0.9-0.9,2-1.3,3.2-1.3
                          c0.2,0,0.4,0,0.7,0s0.6,0.1,0.9,0.2l9-9c-0.8-0.6-1.4-1.5-1.9-2.5s-0.7-2.1-0.7-3.2c0-2.1,0.7-3.9,2.2-5.3C20.2,6.7,21.9,6,24,6
                          s3.9,0.7,5.3,2.2c1.4,1.4,2.2,3.2,2.2,5.3c0,1.2-0.2,2.2-0.7,3.2s-1.1,1.8-1.9,2.5l9,9c0.3-0.1,0.6-0.2,0.9-0.2s0.5,0,0.7,0
                          c1.3,0,2.3,0.4,3.2,1.3c0.9,0.9,1.3,1.9,1.3,3.2c0,1.2-0.4,2.3-1.3,3.2c-0.9,0.9-1.9,1.3-3.2,1.3c-1.2,0-2.3-0.4-3.2-1.3
                          c-0.9-0.9-1.3-1.9-1.3-3.2c0-0.6,0.1-1.1,0.3-1.6s0.5-1,0.9-1.5l-9-9.1c-0.4,0.2-0.7,0.3-1.1,0.4s-0.8,0.2-1.1,0.2V33
                          c1,0.3,1.8,0.9,2.5,1.7s1,1.7,1,2.7c0,1.2-0.4,2.3-1.3,3.2c-0.9,1-1.9,1.4-3.2,1.4c-1.2,0-2.3-0.4-3.2-1.3c-0.9-0.9-1.3-1.9-1.3-3.2
                          c0-1,0.3-1.9,1-2.7s1.5-1.4,2.5-1.7V21c-0.4-0.1-0.8-0.1-1.1-0.2c-0.4-0.1-0.7-0.2-1.1-0.4l-9,9.1c0.4,0.5,0.7,1,0.9,1.5
                          s0.4,1.1,0.4,1.6c0,1.2-0.4,2.3-1.3,3.2C10.8,36.6,9.8,37,8.5,37z"/>
                        </SVG>
                        </SVGBorder>
                      </div>
                      <h3 className="title is-5 has-text-weight-bold pb-3">
                        Simple integration
                      </h3>
                      <p className="subtitle">
                        Easily connect the SCM-Manager to existing systems (e.g. project management software or CI/CD pipelines).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column is-one-quarter-desktop is-two-quarters-tablet">
                  <div className="card has-full-height">
                    <div className="card-content has-text-centered">
                      <div className="mb-5">
                        <SVGBorder>
                          <SVG xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 48 48" fill="#005281">
                            <path className="st0" d="M8.9,34.6h30.1c0.7,0,1.3-0.3,1.9-0.8c0.5-0.5,0.8-1.2,0.8-1.9V10.7c0-0.7-0.3-1.3-0.8-1.9
                            C40.4,8.3,39.8,8,39.1,8H8.9C8.2,8,7.6,8.3,7.1,8.8C6.5,9.4,6.3,10,6.3,10.7V32c0,0.7,0.3,1.3,0.8,1.9C7.6,34.4,8.2,34.6,8.9,34.6z
                             M29.2,18.4l1,1l1,1c0.3,0.3,0.2,0.4-0.2,0.4h-1.1c0,3.6-2.9,6.6-6.6,6.6c-1.9,0-3.5-0.7-4.6-2l1.5-1.5c0.8,0.8,2,1.3,3.2,1.3
                            c2.5,0,4.4-2,4.4-4.4h-1.2c-0.4,0-0.4-0.2-0.2-0.4l1-1l1-1C28.6,18.2,29.1,18.2,29.2,18.4z M15.8,21h1.1c0-3.6,2.9-6.6,6.6-6.6
                            c1.9,0,3.5,0.7,4.6,1.9l-1.5,1.5c-0.8-0.8-2-1.3-3.2-1.3c-2.5,0-4.4,2-4.4,4.4H20c0.4,0,0.4,0.2,0.2,0.4l-1,1l-1,1
                            c-0.3,0.3-0.6,0.3-0.9,0l-1-1l-1-1C15.3,21.2,15.4,21,15.8,21z"/>
                                                <path className="st0" d="M43.1,37.7c-0.3-0.3-0.5-0.4-1-0.4H5.8c-0.4,0-0.7,0.1-1,0.4s-0.4,0.6-0.4,1s0.1,0.7,0.4,1s0.6,0.4,1,0.4h36.3
                            c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.5,0.4-1S43.4,37.9,43.1,37.7z"/>
                          </SVG>
                          </SVGBorder>
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
              <div className="columns">
                <div className="column is-full has-text-centered mt-6">
                  <FontAwesomeIcon icon={faDownload} size="1x" className="has-text-link"/>&nbsp;
                  <Link className="is-primary is-underlined is-large mt-6" to="/download">
                    Download SCM-Manager now
                  </Link>
                </div>
              </div>
            </div>
      </section>
      {/*  Feature Independance  */}
      <section className="section has-background-light">
        <div className="container pb-4">
          <div className="columns is-vcentered" >
            <div className="column is-half">
              <img className="image pr-5" src={Screenshot} alt="SCM-Manager User Interface Examples" />
            </div>
            <div className="column pl-5">
              <h2 className="title is-3 mb-5">Stay independent</h2>
              <div className="has-full-height content is-medium">
                <ul className="ml-5 mb-5">
                  <li>SCM-Manager is <b>free for commercial and personal use</b> – regardless of the size of your team.
                  </li>
                  <li>
                    <b>100% open source</b> under MIT license.
                  </li>
                  <li>
                    <b>No external dependencies:</b> You don't need extra databases or additional webservers.
                  </li>
                  <li>
                    <b>No cloud requirements:</b> Self-hosting is possible on many platforms.
                  </li>
                </ul>
                <FontAwesomeIcon icon={faDownload} size="1x" className="has-text-link"/>&nbsp;
                <Link className="is-primary is-underlined is-size-6 mt-6" to="/download">
                  Download SCM-Manager now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Feature Individual  */}
      <section className="section">
        <div className="container pb-4">
          <div className="columns is-vcentered" >
            <div className="column is-two-thirds">
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
                <Link className="button is-primary is-large mt-6" to="/download">
                  Download SCM-Manager now
                </Link>
              </div>
            </div>
            <div className="column">
              <img className="image pl-3 is-hidden-mobile" src={Plugins} alt="Image of SCM-Manager plugin categories" />
            </div>
          </div>
          <div className="columns">
            <div className="column is-full has-text-centered">

            </div>
          </div>
        </div>
      </section>
    </Page>
  )};

export default Landingpage;


