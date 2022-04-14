import React from "react";
import PageContainer from "../../layout/PageContainer";
import SEO from "../../components/SEO";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

const TagColumn = styled.th`
  vertical-align: middle !important;
  white-space: nowrap;
`;

const Column = styled.td`
  vertical-align: middle !important;
  white-space: nowrap;
`;

const CliArchiv = ({ data }) => (
  <PageContainer>
    <SEO title="CLI" />
    <Title>CLI archive</Title>
    <Subtitle>Download the Command line interface version for SCM-Manager you are looking for</Subtitle>
    <table className="table is-striped is-fullwidth">
      <tbody>
      {data.releases.nodes.map(release => (
        <tr key={release.tag} className="">
          <TagColumn>{release.tag}</TagColumn>
          <Column className="has-text-centered">{release.date}</Column>
          <Column>
            <div className="buttons is-right">
              <Link
                className="button is-outlined is-primary"
                title={`Download version ${release.tag}`}
                to={`/cli/${release.tag}`}
              >
                Packages
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
      filter: { plugin: { eq: null }, type: { eq: "cli" } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        tag
        date(formatString: "Y-MM-DD")
      }
    }
  }
`;

export default CliArchiv;
