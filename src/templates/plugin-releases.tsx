import React from "react";
import { graphql } from "gatsby";
import { Release as ReleaseType } from "../types/release";
import { Plugin as PluginType } from "../types/plugin";
import PluginLayout from "../layout/PluginLayout";
import HtmlContent from "../layout/HtmlContent";
import Release from "../components/Release";

/* TODO: render correct setting component instead */
const PlaceholderSetting = () => (
  <div className="columns is-horizontal field">
    <div className="field-body column">
      <div className="field">
        <div className="control">
          <div className="select is-fullwidth">
            <select
              className="is-fullwidth"
            >
              <option>2.0.x</option>
              <option>1.60.x</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PluginReleases = ({ data, path }) => {
  const renderLastRelease = (plugin: PluginType, releases: ReleaseType[]) => {
    if (releases.length > 0) {
      let latestRelease = null;
      releases.map((release: ReleaseType) => {
          if (!latestRelease || latestRelease.date < release.date) latestRelease = release;
        },
      );
      return <Release key={latestRelease.tag} release={latestRelease} plugin={plugin}/>;
    }
    return <p>No releases yet.</p>;
  };

  const renderChangelog = () => {
    if (data.changelog && data.changelog.html) {
      return <HtmlContent content={data.changelog.html}/>;
    }
    return <p>No CHANGELOG.md found</p>;
  };

  /* TODO: link to correct documentation of release version */
  return <PluginLayout data={data} path={path}>
    <div className="columns">
      <div className="column">
        <p>Latest release:</p>
        {renderLastRelease(data.plugin, data.releases.nodes)}
      </div>
      <div className="column is-one-third has-text-right">
        <p>Change version:</p>
        <PlaceholderSetting/>
        <p>LINK TO DOC OF THIS VERSION</p>
      </div>
    </div>
    {renderChangelog()}
  </PluginLayout>;
};

export const query = graphql`
  query($name: String!) {
    plugin: pluginYaml(name: { eq: $name }) {
      name
      displayName
      description
      author
    }
    releases: allReleasesYaml(filter: { plugin: { eq: $name } }) {
      nodes {
        tag
        date(formatString: "Y-MM-DD")
        url
      }
    }
    changelog: markdownRemark(fields: { plugin: { eq: $name }, slug: {glob: "**/CHANGELOG"}}) {
      html
    }
  }
`;

export default PluginReleases;
