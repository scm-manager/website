import React, { FC } from "react";
import { graphql, Link, PageProps } from "gatsby";
import SEO from "../components/SEO";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import PageContainer from "../layout/PageContainer";
import DownloadCli from "../components/DownloadCli";

type Context = {
  tag: string;
  latest: boolean;
};

const CliPage: FC<PageProps<any, Context>> = ({ data, pageContext }) => {
  return (
    <PageContainer>
      <SEO title={`CLI ${pageContext.tag}`} />
      <Title>CLI</Title>
      <Subtitle>
        {pageContext.latest
          ? "Download the latest version of Command line interface for SCM-Manager"
          : `Changelog and downloads for version ${pageContext.tag}`}
      </Subtitle>
      {pageContext.latest ? null : <NotLatestWarning />}
      <DownloadCli
        release={data.releases.nodes[0]}
        changelog={data.changelog.childChangelog}
      />
    </PageContainer>
  );
};

const NotLatestWarning = () => (
  <div className="notification is-warning">
    <p>This page does not refer to the most recent version of SCM-Manager.</p>
    <Link to="/cli/">Go to the download of the latest Version</Link>
  </div>
);

export const query = graphql`
  query($tag: String!) {
    releases: allReleasesYaml(
      filter: { plugin: { eq: null }, tag: { eq: $tag } }
      sort: { fields: [date], order: DESC }
      limit: 1
    ) {
      nodes {
        ...DownloadCliReleaseFragment
      }
    }
    changelog: file(relativePath: { eq: "CHANGELOG.md" }) {
      childChangelog {
        versions(tag: $tag) {
          ...DownloadCliChangelogFragment
        }
      }
    }
  }
`;

export default CliPage;
