import React, { FunctionComponent } from "react";
import { Plugin as PluginType } from "../types/plugin";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

type Props = {
  plugin: PluginType;
};

const Plugin: FunctionComponent<Props> = ({ plugin }) => {
  return (
    <article
      className="media pointer"
      onClick={e => navigate(`/plugins/${plugin.name}/`)}
    >
      <p className="media-left image is-32x32">
        <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
      </p>
      <div className="media-content">
        <p>
          <strong>{plugin.displayName}</strong>{" "}
          <span className="is-size-6 has-text-grey">{plugin.author}</span>
          <br />
          {plugin.description}
        </p>
      </div>
    </article>
  );
};

export default Plugin;
