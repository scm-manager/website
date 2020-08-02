import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";
import CloudoguLogo from "../CloudoguLogo";

const Cloudogu: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Powered by Cloudogu">
      Cloudogu GmbH promotes open source software like SCM-Manager and the <a href="https://cloudogu.com/en/ecosystem/" title="Cloudogu EcoSystem">Cloudogu EcoSystem</a>.
    </TextColumn>
    <ImageColumn>
      <CloudoguLogo size="5em" />
    </ImageColumn>
  </Feature>
);

export default Cloudogu;
