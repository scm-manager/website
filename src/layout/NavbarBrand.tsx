import React from "react";
import Logo from "../images/scm-manager_logo.png";
import { Link } from "gatsby";
import NavbarBurger from "./NavbarBurger";
import { NavbarProps } from "./NavbarProps";

const NavbarBrand = (props: NavbarProps) => {
  return (
    <div className="navbar-brand">
      <div className="navbar-item">
        <Link className="brand" to="/">
          <div className="brand-icon">
            <img alt="SCM-Manager" role="presentation" src={Logo} />
          </div>
        </Link>
      </div>
      <NavbarBurger {...props} />
    </div>
  );
};

export default NavbarBrand;
