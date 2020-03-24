import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import Title from "../Title";
import Feature from "./Feature";
import {
  Html5,
  Css3,
  Javascript,
  ReactJs,
  Redux,
  Reactrouter,
  Bulma,
} from "@icons-pack/react-simple-icons";
import IconGroup from "../IconGroup";

const UserInterface: FC = () => (
  <Feature>
    <FeatureColumn alignRight>
      <IconGroup>
        <Html5 />
        <Css3 />
        <Javascript />
      </IconGroup>
      <IconGroup>
        <ReactJs />
        <Redux />
        <Reactrouter />
        <Bulma />
      </IconGroup>
    </FeatureColumn>
    <FeatureColumn>
      <Title>User Interface</Title>
      <p>
        SCM-Manager comes with a nice looking rich user interface, which
        provides you with a smooth user experience.
      </p>
    </FeatureColumn>
  </Feature>
);

export default UserInterface;
