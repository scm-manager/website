import React from "react";
import WelcomeText from "./WelcomeText";
import WelcomeImage from "./WelcomeImage";

const WelcomeSection = () => (
  <section className="hero is-welcome">
    <div className="container hero-body">
      <div className="columns is-vcentered has-text-centered">
        <div className="column is-8">
          <WelcomeText />
        </div>
        <div className="column is-4">
          <WelcomeImage />
        </div>
      </div>
    </div> 
  </section>
);

export default WelcomeSection;
