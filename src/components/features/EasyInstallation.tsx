import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import {
  Linux,
  Redhat,
  Debian,
  Windows,
  Apple,
  Docker,
  Kubernetes,
  Helm,
} from "@icons-pack/react-simple-icons";
import IconGroup from "../IconGroup";
import Title from "../Title";
import Feature from "./Feature";

const EasyInstallation: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <IconGroup>
        <Linux />
        <Redhat />
        <Debian />
        <Windows />
        <Apple />
      </IconGroup>
      <IconGroup>
        <Docker />
        <Kubernetes />
        <Helm />
      </IconGroup>
    </FeatureColumn>
    <FeatureColumn>
      <Title>Easy Installation</Title>
      <p>
        SCM-Manager can be installed on the platform where you want it. We are
        trying to make the installation on every platform as easy as possible.
      </p>
    </FeatureColumn>
  </Feature>
);

export default EasyInstallation;
