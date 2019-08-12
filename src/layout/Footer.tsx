import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
          <div className="container">
              <div class="columns">
                <div class="column is-8">
                    <Link to="/imprint">Imprint & Privacy</Link>
                 </div>
                 <div class="column is-4 has-text-right">
                 <p>
                      © {new Date().getFullYear()} Plugin Backend of{" "}
                      <a href="https://scm-manager.org">SCM-Manager</a>
                    </p>
                    <p>
                      Supported by <a href="https://cloudogu.com">Cloudogu GmbH</a>
                    </p>
                 </div>
                </div>
           </div>
      </div>
    </footer>
  );
};

export default Footer;
