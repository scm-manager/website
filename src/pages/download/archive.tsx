import React from "react";
import PageContainer from "../../layout/PageContainer";
import SEO from "../../components/SEO";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { graphql, Link } from "gatsby";
import { createProps } from "../../components/Download";
import styled from "styled-components";
import ReleaseFeedNote from "../../components/ReleaseFeedNote";

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

type Changelog = {
  versions: {
    tag: string;
  }[];
};

const hasChangelog = (changelog: Changelog, tag: string) => {
  return !!changelog.versions.find(version => version.tag === tag);
};

const DownloadArchiv = ({ data }) => (
  <PageContainer>
    <SEO title="Download" />
    <Title>Download archive</Title>
    <Subtitle>Download the SCM-Manager version you are looking for</Subtitle>
    <ReleaseFeedNote />
    <table className="table is-striped is-fullwidth">
      <tbody>
        {data.releases.nodes.map(release => (
          <tr key={release.tag} className="">
            <TagColumn>{release.tag}</TagColumn>
            <Column className="has-text-centered">{release.date}</Column>
            <Column className="has-text-centered">
              {release.packages
                .map(p => createProps(release.tag, p, "1.5rem"))
                .filter(p => !!p)
                .sort((a, b) => a.type.localeCompare(b.type))
                .map(props => (
                  <Icon key={props.type} to={`/download/${release.tag}/#${props.type}`}>
                    {props.icon}
                  </Icon>
                ))}
            </Column>
            <Column>
              <div className="buttons is-right">
                {hasChangelog(data.changelog.childChangelog, release.tag) && (
                  <Link
                    className="button is-outlined is-info"
                    title={`Downlaod version ${release.tag}`}
                    to={`/download/${release.tag}/#changelog`}
                  >
                    Changelog
                  </Link>
                )}
                <Link
                  className="button is-outlined is-primary"
                  title={`Downlaod version ${release.tag}`}
                  to={`/download/${release.tag}`}
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
      filter: { plugin: { eq: null }, type: { ne: "cli" } }
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
    changelog: file(relativePath: { eq: "CHANGELOG.md" }) {
      childChangelog {
        versions {
          tag
        }
      }
    }
  }
`;

export default DownloadArchiv;
