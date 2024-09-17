import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { Opensourceinitiative } from "@icons-pack/react-simple-icons";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

const OpenSource: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="OpenSource">
      SCM-Manager is free and licensed under the AGPL-3.0-only OpenSource license.
    </TextColumn>
    <ImageColumn>
      <Opensourceinitiative size="4em" />
    </ImageColumn>
  </Feature>
);

export default OpenSource;
