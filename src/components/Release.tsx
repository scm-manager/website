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
          <p className="subtitle is-6"><span className="has-text-grey">Released by</span><br/>{release.author}</p>
        </div>
      </div>
      <div className="content">
        <span className="has-text-grey">Released at</span>
        <p><time>{release.date}</time></p>
        <a className="button is-info is-outlined" href={release.url}>Download</a>
      </div>
    </div>
  </div>
);

export default Release;
