import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
import { Openapiinitiative } from "@icons-pack/react-simple-icons";

const RestApi: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <Title>REST API</Title>
      <p>
        We provide you a rich{" "}
        <a href="https://martinfowler.com/articles/richardsonMaturityModel.html">
          Level 3 RESTful WebService
        </a>{" "}
        for every funktion of SCM-Manager. This makes it easy to integrate with
        your internal processes.
      </p>
    </FeatureColumn>
    <FeatureColumn>
      <Openapiinitiative size="4em" />
    </FeatureColumn>
  </Feature>
);

export default RestApi;
