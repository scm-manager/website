import React, { FC } from "react";

type ButtonProps = {
  href: string;
  color: string;
};

const Button: FC<ButtonProps> = ({color, href, children}) => (
  <p className="control">
  <a className={`button is-${color} is-large`} href={href}>
    {children}
  </a>
</p>
)

const WelcomeText = () => {
  return (
    <div className="section-header">
      <h1 className="title">Plugins</h1>
      <h2 className="subtitle is-4 is-spaced">
        Find the right plugin for your SCM-Manager instance
      </h2>
      <div className="field is-grouped is-grouped-centered">
        <Button color="primary" href="#categories">V2 Plugins</Button>
        <Button color="info" href="https://plugins.scm-manager.org">V1 Plugins</Button>
      </div>
    </div>
  );
};

export default WelcomeText;
