import React from "react";
import { Link } from "gatsby";

type Props = {
  to: string;
  value: string;
  partiallyActive?: boolean;
};

const NavbarItem = ({ to, value, partiallyActive }: Props) => {
  return (
    <Link
      to={to}
      className="navbar-item"
      activeClassName="is-active"
      partiallyActive={partiallyActive}
    >
      {value}
    </Link>
  );
};

export default NavbarItem;
