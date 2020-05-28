import React from "react";
import PageContainer from "../../layout/PageContainer";
import SEO from "../../components/SEO";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { graphql, Link } from "gatsby";
import { createProps } from "../../components/Download";
import styled from "styled-components";

const TagColumn = styled.th`
  vertical-align: middle !important;
  white-space: nowrap;
`;

const Column = styled.td`
  vertical-align: middle !important;
  white-space: nowrap;
`;

const Icon = styled(Link)`
  margin-right: 1rem;
`;

const DownloadArchiv = ({ data }) => (
  <PageContainer>
    <SEO title="Download" />
    <Title>Download archive</Title>
    <Subtitle>Download the SCM-Manager version you are looking for</Subtitle>
    <table className="table is-striped is-fullwidth">
      <tbody>
        {data.releases.nodes.map(release => (
          <tr key={release.tag} className="">
            <TagColumn>{release.tag}</TagColumn>
            <Column className="has-text-centered">{release.date}</Column>
            <Column className="has-text-centered">
              {release.packages
                .map(p => createProps(p, "1.5rem"))
                .map(props => (
                  <Icon to={`/download/${release.tag}/#${props.type}`}>
                    {props.icon}
                  </Icon>
                ))}
            </Column>
            <Column>
              <div className="buttons is-right">
                <Link
                  className="button is-outlined is-primary"
                  title={`Downlaod version ${release.tag}`}
                  to={`/download/${release.tag}`}
                >
                  Downloads
                </Link>
                <Link
                  className="button is-outlined is-info"
                  title={`Downlaod version ${release.tag}`}
                  to={`/download/${release.tag}/#changelog`}
                >
                  Changelog
                </Link>
              </div>
            </Column>
          </tr>
        ))}
      </tbody>
    </table>
  </PageContainer>
);

export const query = graphql`
  query {
    releases: allReleasesYaml(
      filter: { plugin: { eq: null } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        tag
        date(formatString: "Y-MM-DD")
        packages {
          type
        }
      }
    }
  }
`;

export default DownloadArchiv;
