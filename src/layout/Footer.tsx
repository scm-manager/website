import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          © {new Date().getFullYear()} Plugin Backend of{" "}
          <a href="https://scm-manager.org">SCM-Manager</a>
        </p>
        <p>
          Supported by <a href="https://cloudogu.com">Cloudogu GmbH</a>
        </p>
        <Link to="/imprint">Imprint</Link>
      </div>
    </footer>
  );
};

export default Footer;
