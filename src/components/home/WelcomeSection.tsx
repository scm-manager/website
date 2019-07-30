import React from "react";
import WelcomeText from "./WelcomeText";
import WelcomeImage from "./WelcomeImage";

const WelcomeSection = () => (
  <section className="section is-hero">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-6">
          <WelcomeText />
        </div>
        <div className="column is-6">
          <WelcomeImage />
        </div>
      </div>
    </div>
  </section>
);

export default WelcomeSection;
