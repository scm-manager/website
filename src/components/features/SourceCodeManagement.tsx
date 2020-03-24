import React, { FC } from "react";
import FeatureColumn from "./FeatureColumn";
import { Git, Subversion } from "@icons-pack/react-simple-icons";
import IconGroup from "../IconGroup";
import Title from "../Title";
import Feature from "./Feature";

const SourceCodeManagement: FC = () => (
  <Feature>
    <FeatureColumn alignRight={true}>
      <Title>SouceCode Management</Title>
      <p>
        SCM-Manager comes out of the box with support for Git, Mercurial and
        Subversion. All three types can be manageged the same way over one
        interface.
      </p>
    </FeatureColumn>
    <FeatureColumn>
      <IconGroup>
        <Git size="3em" />
        {/* TODO mercurial */}
        <Subversion size="3em" />
      </IconGroup>
    </FeatureColumn>
  </Feature>
);

export default SourceCodeManagement;
