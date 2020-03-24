import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Extensible: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <FontAwesomeIcon icon="puzzle-piece" size="4x" />
    </FeatureColumn>
    <FeatureColumn>
      <Title>Extensible</Title>
      <p>SCM-Manager can be easily extended with its simple plugin api.</p>
    </FeatureColumn>
  </Feature>
);

export default Extensible;
