import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const NoDependencies: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="No dependencies">
      No web servers, databases or caches are required. SCM-Manager is very
      lightweight and does not force you to install a ton of infrastructure
      components.
    </TextColumn>
    <ImageColumn>
      <FontAwesomeIcon icon={faProjectDiagram} size="4x" />
    </ImageColumn>
  </Feature>
);

export default NoDependencies;
