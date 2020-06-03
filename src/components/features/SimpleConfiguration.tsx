import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

const SimpleConfiguration: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Simple Configuration">
      SCM-Manager is completely configurable from its Web-Interface. There is
      no need to hack configuration files.
    </TextColumn>
    <ImageColumn>
      <FontAwesomeIcon icon={faFileCode} size="4x" />
    </ImageColumn>
  </Feature>
);

export default SimpleConfiguration;
