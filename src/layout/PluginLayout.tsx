import React from "react";
import PageContainer from "./PageContainer";
import SEO from "../components/SEO";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import PluginNavigation from "../components/PluginNavigation";
import { graphql } from "gatsby";

const PluginLayout = ({ plugin, children }) => (
  <PageContainer>
    <SEO title={"Plugin " + plugin.displayName}/>
    <div className="columns">
      <div className="column is-three-quarters is-plugin">
        <Title>{plugin.displayName}</Title>
        <Subtitle>{plugin.description}</Subtitle>
        {children}
      </div>
      <div className="column is-one-quarter">
        <PluginNavigation name={plugin.name}/>
      </div>
    </div>
  </PageContainer>
);


export const pluginLayoutFragment = graphql`
  fragment PluginLayout on PluginYaml {
    name
    displayName
    description
  }
`;

export default PluginLayout;
