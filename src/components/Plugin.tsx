import React, { FunctionComponent } from "react";
import { Plugin as PluginType } from "../types/plugin";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  plugin: PluginType;
};

const Plugin: FunctionComponent<Props> = ({ plugin }) => {
  return (
    <article className="media pointer" onClick={e => navigate(`/plugins/${plugin.name}/`)}>
      <figure className="media-left">
        <p className="image is-64x64">
          <FontAwesomeIcon icon="puzzle-piece" size="4x" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{plugin.displayName}</strong> <span className="is-size-6 has-text-grey">{plugin.author}</span>
            <br />
            {plugin.description}
            <br />
            <small>31m</small>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Plugin;
