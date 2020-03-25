import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

const Authentication: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Authentication">
      SCM-Manager comes with an very flexible authentication mechanism. You can
      configure the authentication mechanism which are you need or use the
      embedded one.
    </TextColumn>
    <ImageColumn>
      <FontAwesomeIcon icon="users" size="4x" />
    </ImageColumn>
  </Feature>
);

export default Authentication;
