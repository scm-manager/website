import React from "react";
import Navbar from "./Navbar";
import "./fontawesome";
import "../styles/main.scss";

function Header() {
  return (
    <header className="app-header">
      <Navbar />
    </header>
  );
}

export default Header;
