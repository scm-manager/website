import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
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

const Plugins: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <Title>Plugins</Title>
      <p>
        We provide you a lot of useful plugins from a wide range of categories
        out of the box.
      </p>
    </FeatureColumn>
    <FeatureColumn>
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
    </FeatureColumn>
  </Feature>
);

export default Plugins;
