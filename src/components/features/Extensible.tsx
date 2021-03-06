import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'


const Extensible: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Extensible">
      SCM-Manager can be easily extended with its simple plugin api.
    </TextColumn>
    <ImageColumn>
      <FontAwesomeIcon icon={faPuzzlePiece} size="4x" />
    </ImageColumn>
  </Feature>
);

export default Extensible;
