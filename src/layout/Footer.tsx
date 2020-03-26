import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const DarkFooter = styled.footer`
  background-color: #111 !important;
`;

const FooterText = styled.p`
  color: #999;
`;

const Footer = () => {
  return (
    <DarkFooter className="footer">
      <section className="section container">
        <div className="content columns">
          <div className="column is-8">
            <Link to="/imprint">Imprint & Privacy</Link>
          </div>
          <div className="column is-4 has-text-right">
            <FooterText>
              © {new Date().getFullYear()} Plugin Backend of{" "}
              <a href="https://scm-manager.org">SCM-Manager</a>
            </FooterText>
            <FooterText>
              Supported by <a href="https://cloudogu.com">Cloudogu GmbH</a>
            </FooterText>
          </div>
        </div>
      </section>
    </DarkFooter>
  );
};

export default Footer;
