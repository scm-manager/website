import React, { FC } from "react";
import { Git, Subversion } from "@icons-pack/react-simple-icons";
import IconGroup from "../IconGroup";
import Feature, { FeatureProps } from "./Feature";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

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
        {/* TODO mercurial */}
        <Subversion size="3em" />
      </IconGroup>
    </ImageColumn>
  </Feature>
);

export default SourceCodeManagement;
