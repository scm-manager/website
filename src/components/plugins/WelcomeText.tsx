import React from "react";
import { Link } from "gatsby"

const WelcomeText = () => {
  return (
    <div className="section-header">
      <h1 className="title">Plugins</h1>
      <h2 className="subtitle is-4 is-spaced">Find the right plugin for your SCM-Manager instance</h2>
      <a className="button is-primary is-large" href="#categories">
        Explore
      </a>
    </div>
  );
}


export default WelcomeText;
