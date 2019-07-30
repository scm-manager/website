import React from "react";
import { NavbarProps } from "./NavbarProps";

const NavbarBurger = ({active, toggleActive}: NavbarProps) => {
  let classes = "navbar-burger";
  if (active) {
    classes += " is-active";
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      role="button"
      className={classes}
      aria-label="menu"
      aria-expanded="false"
      onClick={toggleActive}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  );
};

export default NavbarBurger;
