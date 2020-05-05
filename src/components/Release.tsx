import React, { FunctionComponent } from "react";
import { Plugin } from "../types/plugin";
import { Release as ReleaseType } from "../types/release";

type Props = {
  plugin: Plugin;
  release: ReleaseType;
};

const Release: FunctionComponent<Props> = ({ plugin, release }) => (
  <>
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{release.tag}</p>
      </div>
    </div>
    <div className="content">
      <span className="has-text-grey">Released at</span>
      <p>
        <time>{release.date}</time>
      </p>
      <a className="button is-info is-outlined" href={release.url}>Download</a>
    </div>
  </>
);

export default Release;
