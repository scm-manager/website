import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

type Props = {
  to: string;
  value: string;
  activeOn?: string;
  partiallyActive?: boolean;
};

const isActive = (pathname: string, activePath: string, partial: boolean) => {
  if (partial) {
    return pathname.startsWith(activePath);
  }
  return pathname === activePath;
};

const NavbarItem = ({ to, value, activeOn, partiallyActive }: Props) => {
  const { pathname } = useLocation();
  let className = "navbar-item";
  if (isActive(pathname, activeOn || to, partiallyActive)) {
    className += " is-active";
  }
  return (
    <Link to={to} className={className} partiallyActive={partiallyActive}>
      {value}
    </Link>
  );
};

export default NavbarItem;
