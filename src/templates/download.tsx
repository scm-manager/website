import React from "react";
import SEO from "../components/SEO";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import PageContainer from "../layout/PageContainer";
import { graphql } from "gatsby";
import Download from "../components/Download";

const DownloadPage = ({ data }) => {
  return (
    <PageContainer>
      <SEO title="Download" />
      <Title>Download</Title>
      <Subtitle>
        Download the latest and greatest version of SCM-Manager
      </Subtitle>
      <Download
        release={data.releases.nodes[0]}
        changelog={data.changelog.childChangelog}
      />
    </PageContainer>
  );
};

export const query = graphql`
  query($tag: String!) {
    releases: allReleasesYaml(
      filter: { plugin: { eq: null }, tag: { eq: $tag } }
      sort: { fields: [date], order: DESC }
      limit: 1
    ) {
      nodes {
        ...DownloadReleaseFragment
      }
    }
    changelog: file(relativePath: { eq: "CHANGELOG.md" }) {
      childChangelog {
        versions(tag: $tag) {
          ...DownloadChangelogFragment
        }
      }
    }
  }
`;

export default DownloadPage;
