import React, { FC } from "react";
import { graphql, Link, PageProps } from "gatsby";
import satisfies from "semver/functions/satisfies";
import SEO from "../components/SEO";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import PageContainer from "../layout/PageContainer";
import Download from "../components/Download";
import ReleaseFeedNote from "../components/ReleaseFeedNote";

type Context = {
  tag: string;
  latest: boolean;
};

const DownloadPage: FC<PageProps<any, Context>> = ({ data, pageContext }) => {
  const alerts = data.alerts.nodes.filter(p =>
    satisfies(pageContext.tag, p.affectedVersions)
  );
  return (
    <PageContainer>
      <SEO title={`Download ${pageContext.tag}`} />
      <Title>Download</Title>
      <Subtitle>
        {pageContext.latest
          ? "Download the latest and greatest version of SCM-Manager"
          : `Changelog and downloads for version ${pageContext.tag}`}
      </Subtitle>
      {pageContext.latest ? null : <NotLatestWarning />}
      <ReleaseFeedNote />
      <Download
        release={data.releases.nodes[0]}
        changelog={data.changelog.childChangelog}
        alerts={alerts}
      />
    </PageContainer>
  );
};

const NotLatestWarning = () => (
  <div className="notification is-warning">
    <p>This page does not refer to the most recent version of SCM-Manager.</p>
    <Link to="/download/">Go to the download of the latest Version</Link>
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
    alerts: allAlertsYaml(filter: { fields: { component: { eq: "core" } } }) {
      nodes {
        ...DownloadAlertsFragment
      }
    }
  }
`;

export default DownloadPage;
