import React, { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <NavbarBrand active={active} toggleActive={toggleActive} />
        <NavbarMenu active={active} toggleActive={toggleActive} />
      </div>
    </nav>
  );
};

export default Navbar;
