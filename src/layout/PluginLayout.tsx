import React from "react";
import PageContainer from "./PageContainer";
import SEO from "../components/SEO";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import PluginNavigation from "../components/PluginNavigation";

const PluginLayout = ({ data, children, path }) => (
  <PageContainer>
    <SEO title={"Plugin " + data.plugin.displayName}/>
    <div className="columns">
      <div className="column is-three-quarters is-plugin">
        <Title>{data.plugin.displayName}</Title>
        <Subtitle>{data.plugin.description}</Subtitle>
        {children}
      </div>
      <div className="column is-one-quarter">
        <PluginNavigation path={path} name={data.plugin.name}/>
      </div>
    </div>
  </PageContainer>
);

export default PluginLayout;
