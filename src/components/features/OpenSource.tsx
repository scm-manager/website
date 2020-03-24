import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
import { Opensourceinitiative } from "@icons-pack/react-simple-icons";

const OpenSource: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <Title>OpenSource</Title>
      <p>SCM-Manager is free and licensed under the MIT OpenSource license.</p>
    </FeatureColumn>
    <FeatureColumn>
      <Opensourceinitiative size="4em" />
    </FeatureColumn>
  </Feature>
);

export default OpenSource;
