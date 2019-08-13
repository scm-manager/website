import React, { FunctionComponent } from "react";
import { Plugin as PluginType } from "../types/plugin";
import { navigate } from "gatsby";

type Props = {
  plugin: PluginType;
};

const Plugin: FunctionComponent<Props> = ({ plugin }) => {
  return (
    <article className="media" style={{cursor: "pointer"}} onClick={e => navigate(`/plugins/${plugin.name}`)}>
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
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
