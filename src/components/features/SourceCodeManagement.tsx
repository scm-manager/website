import React, { FC } from "react";
import { Git, Subversion } from "@icons-pack/react-simple-icons";
import IconGroup from "../IconGroup";
import Feature, { FeatureProps } from "./Feature";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";
import MercurialLogo from "../../../content/images/mercurial-logo.svg"

const SourceCodeManagement: FC<FeatureProps> = props => (
  <Feature {...props}>
    <TextColumn title="SouceCode Management">
      SCM-Manager comes out of the box with support for Git, Mercurial and
      Subversion. All three types can be managed the same way over one
      interface.
    </TextColumn>
    <ImageColumn>
      <IconGroup>
        <Git size="3em" />
        <img
          alt="Mercurial Logo"
          src={MercurialLogo}
          width="48px"
        />
        <Subversion size="3em" />
      </IconGroup>
    </ImageColumn>
  </Feature>
);

export default SourceCodeManagement;
