import React from "react";
import { NavbarProps } from "./NavbarProps";
import NavbarItem from "./NavbarItem";
import useLatestRelease from "../hooks/useLatestRelease";

type Props = NavbarProps;

const NavbarMenu = ({ active, toggleActive }: Props) => {
  const release = useLatestRelease();

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
        <NavbarItem
          to={`/download/${release.tag}/`}
          activeOn="/download"
          value="Download"
          partiallyActive={true}
        />
        <NavbarItem
          to={`${release.docs}`}
          activeOn="/docs"
          value="Docs"
          partiallyActive={true}
        />
        <NavbarItem to="/plugins/" value="Plugins" partiallyActive={true} />
        <NavbarItem to="/support/" value="Support" />
      </div>
    </div>
  );
};

export default NavbarMenu;
