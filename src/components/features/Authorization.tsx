import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Authorization: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <FontAwesomeIcon icon="users-cog" size="4x" />
    </FeatureColumn>
    <FeatureColumn>
      <Title>Authorization</Title>
      <p>
        SCM-Manager provides a fine grained authorization model. Give users or
        groups of users exactly the permissions the need.
      </p>
    </FeatureColumn>
  </Feature>
);

export default Authorization;
