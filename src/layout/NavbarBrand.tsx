import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import NavbarBurger from "./NavbarBurger";
import { NavbarProps } from "./NavbarProps";

const NavbarBrand = (props: NavbarProps) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/scm-manager_logo.png" }) {
        childImageSharp {
          fixed(width: 327, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className="navbar-brand">
      <div className="navbar-item">
        <Link className="brand" to="/">
          <div className="brand-icon">
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="SCM-Manager"
              fadeIn={false}
              loading="eager"
            />
          </div>
        </Link>
      </div>
      <NavbarBurger {...props} />
    </div>
  );
};

export default NavbarBrand;
