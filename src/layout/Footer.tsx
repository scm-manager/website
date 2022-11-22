import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const DarkFooter = styled.footer`
  background-color: #111 !important;

  a:hover {
    color: #fff;
  }
`;

const FooterText = styled.p`
  color: #999;
`;

const TextStyleButton = styled.button`
  padding: 0 !important;
  height: initial !important;
  border: none !important;

  &:hover {
    color: white !important;
    text-decoration: none !important;
  }
`;

const Footer = () => {
  return (
    <DarkFooter className="footer">
      <section className="section container">
        <div className="columns">
          <div className="column is-8">
            <ul>
              <li className="is-inline-block mr-3">
                <Link to="/imprint">Imprint</Link>
              </li>
              <li className="is-inline-block mr-3">
                <Link to="/privacy">Privacy</Link>
              </li>
              {"CCM" in window ? (
                <li className="is-inline-block">
                  <TextStyleButton
                    className="button is-ghost"
                    onClick={() => {
                      // @ts-ignore
                      window.CCM.openWidget();
                    }}
                  >
                    Cookie settings
                  </TextStyleButton>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="column is-4 content has-text-right">
            <FooterText>
              © {new Date().getFullYear()} Home of{" "}
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
