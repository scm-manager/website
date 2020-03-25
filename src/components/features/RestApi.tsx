import React, { FC } from "react";
import Feature, { FeatureProps } from "./Feature";
import { Openapiinitiative } from "@icons-pack/react-simple-icons";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

const RestApi: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="REST API">
      We provide you a rich{" "}
      <a href="https://martinfowler.com/articles/richardsonMaturityModel.html">
        Level 3 RESTful WebService
      </a>{" "}
      for every funktion of SCM-Manager. This makes it easy to integrate with
      your internal processes.
    </TextColumn>
    <ImageColumn>
      <Openapiinitiative size="4em" />
    </ImageColumn>
  </Feature>
);

export default RestApi;
