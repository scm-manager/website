import React, { FC } from "react";
import { Plugin as PluginType } from "../types/plugin";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

type Props = {
  plugin: PluginType;
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PluginAvatar: FC<Props> = ({ plugin }) => {
  if (plugin.avatarUrl) {
    return (
      <img
        src={`/img/${plugin.avatarUrl}`}
        alt={`Logo of ${plugin.displayName}`}
      />
    );
  }
  return (
    <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
  );
};

const Plugin: FC<Props> = ({ plugin }) => {
  const onClick = () => {
    return navigate(`/plugins/${plugin.name}/`);
  };

  return (
    <article className="media pointer" onClick={onClick}>
      <ImageContainer className="media-left image is-32x32">
        <PluginAvatar plugin={plugin} />
      </ImageContainer>
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
