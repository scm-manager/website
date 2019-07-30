import React, { FunctionComponent } from "react";
import { Release as ReleaseType } from "../types/release";

type Props = {
  release: ReleaseType;
};

const Release: FunctionComponent<Props> = ({ release }) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{release.tag}</p>
          <p className="subtitle is-6">Released by {release.author}</p>
        </div>
      </div>
      <div className="content">
        Released at <time>{release.date}</time>
        <br />
        <a href={release.url}>Download</a>
      </div>
    </div>
  </div>
);

export default Release;
