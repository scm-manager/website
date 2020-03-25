import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

const SimpleConfiguration: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Simple configuration">
      SCM-Manager is completely configureable from its Web-Interface. There is
      no need to hack configuration files.
    </TextColumn>
    <ImageColumn>
      <FontAwesomeIcon icon="file-code" size="4x" />
    </ImageColumn>
  </Feature>
);

export default SimpleConfiguration;
