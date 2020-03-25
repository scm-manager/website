import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import IconGroup from "../IconGroup";
import {
  Jira,
  Jenkins,
  Windows,
  Linux,
  Bamboo,
  Gravatar,
  Git,
  Subversion,
} from "@icons-pack/react-simple-icons";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

const Plugins: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="Plugins">
      We provide you a lot of useful plugins from a wide range of categories out
      of the box.
    </TextColumn>
    <ImageColumn>
      <IconGroup>
        <Jira />
        <Jenkins />
        <Windows />
        <Linux />
      </IconGroup>
      <IconGroup>
        <Bamboo />
        <Gravatar />
        <Git />
        <Subversion />
      </IconGroup>
    </ImageColumn>
  </Feature>
);

export default Plugins;
