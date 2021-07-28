import React, { FunctionComponent } from "react";
import { Plugin as PluginType } from "../types/plugin";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import CloudoguLogo from "./CloudoguLogo";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FC } from "react";

type Props = {
  plugin: PluginType;
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PluginAvatar: FC<Props> = ({ plugin }) => {
  if (plugin.avatar?.extension === "svg") {
    return (
      <img
        src={plugin.avatar.publicURL}
        alt={`Logo of ${plugin.displayName}`}
      />
    );
  } else if (plugin.avatar) {
    return (
      <GatsbyImage
        image={getImage(plugin.avatar)}
        alt={`Logo of ${plugin.displayName}`}
      />
    );
  }
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

const Plugin: FC<Props> = ({ plugin }) => {
  const renderIcon = () => {};

  const onClick = () => {
    if (plugin.cloudoguLink) {
      window.open(plugin.cloudoguLink, "_blank");
    } else {
      return navigate(`/plugins/${plugin.name}/`);
    }
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
