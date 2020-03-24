import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoDependencies: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <FontAwesomeIcon icon="project-diagram" size="4x" />
    </FeatureColumn>
    <FeatureColumn>
      <Title>No dependencies</Title>
      <p>
        No webservers, databases or caches are required. SCM-Manager is very
        lightweight and does not force you to install a ton of infrastructure
        components.
      </p>
    </FeatureColumn>
  </Feature>
);

export default NoDependencies;
