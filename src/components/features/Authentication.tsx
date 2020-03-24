import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Authentication: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <Title>Authentication</Title>
      <p>
        SCM-Manager comes with an very flexible authentication mechanism. You
        can configure the authentication mechanism which are you need or use the
        embedded one.
      </p>
    </FeatureColumn>
    <FeatureColumn>
      <FontAwesomeIcon icon="users" size="4x" />
    </FeatureColumn>
  </Feature>
);

export default Authentication;
