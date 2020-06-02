import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

const Authorization: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Authorization">
      SCM-Manager provides a fine grained authorization model. Give users or
      groups of users exactly the permissions they need.
    </TextColumn>
    <ImageColumn>
      <FontAwesomeIcon icon={faUserShield} size="4x" />
    </ImageColumn>
  </Feature>
);

export default Authorization;
