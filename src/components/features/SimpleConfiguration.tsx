import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SimpleConfiguration: FC = () => (
  <Feature>
    <FeatureColumn>
      <Title>Simple configuration</Title>
      <p>
        SCM-Manager is completely configureable from its Web-Interface. There is
        no need to hack configuration files.
      </p>
    </FeatureColumn>
    <FeatureColumn>
      <FontAwesomeIcon icon="file-code" size="4x" />
    </FeatureColumn>
  </Feature>
);

export default SimpleConfiguration;
