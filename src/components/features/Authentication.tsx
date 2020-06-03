import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Authentication: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Authentication">
      SCM-Manager comes with a very flexible authentication mechanism. You can
      configure the mechanism that fits your needs or use the embedded one.
    </TextColumn>
    <ImageColumn>
      <FontAwesomeIcon icon={faUsers} size="4x" />
    </ImageColumn>
  </Feature>
);

export default Authentication;
