import React, { FunctionComponent } from "react";
import { Plugin as PluginType } from "../types/plugin";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import CloudoguLogo from "./CloudoguLogo";

type Props = {
  plugin: PluginType;
};

const Plugin: FunctionComponent<Props> = ({ plugin }) => {
  const renderIcon = () => {
    return (
      <>
        {plugin.cloudoguLink ? (
          <CloudoguLogo size={32} />
        ) : (
          <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
        )}
      </>
    );
  };

  const onClick = () => {
    if (plugin.cloudoguLink) {
      window.open(plugin.cloudoguLink, "_blank");
    } else {
      return navigate(`/plugins/${plugin.name}/`);
    }
  }

  return (
    <article className="media pointer" onClick={(e) => onClick()}>
      <p className="media-left image is-32x32">{renderIcon()}</p>
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
