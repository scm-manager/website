import React from "react";
import { NavbarProps } from "./NavbarProps";
import NavbarItem from "./NavbarItem";

type Props = NavbarProps;

const NavbarMenu = ({ active, toggleActive }: Props) => {
  let classes = "navbar-menu";
  if (active) {
    classes += " is-active";
  }

  const closeOnMobile = () => {
    if (active) {
      toggleActive();
    }
  };

  return (
    <div className={classes} onClick={closeOnMobile}>
      <div className="navbar-end">
        <NavbarItem to="/" value="Home" />
        <NavbarItem to="/blog/" value="Blog" partiallyActive={true} />
        <NavbarItem to="/docs/2.0.x/en/" value="Docs" partiallyActive={true} />
        <NavbarItem to="/plugins/" value="Plugins" partiallyActive={true} />
        <NavbarItem to="/about" value="About" />
      </div>
    </div>
  );
};

export default NavbarMenu;
