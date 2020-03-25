import React, { FC } from "react";
import Title from "../Title";
import Feature, { FeatureProps } from "./Feature";
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
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

const UserInterface: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="User Interface">
      SCM-Manager comes with a nice looking rich user interface, which provides
      you with a smooth user experience.
    </TextColumn>
    <ImageColumn>
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
    </ImageColumn>
  </Feature>
);

export default UserInterface;
