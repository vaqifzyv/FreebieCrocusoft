import React from "react";
import "./header.css";
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import HeaderNav from "./HeaderNav/HeaderNav";

function Header() {
  return (
    <header>
      <HeaderNav />
      <HeaderBanner />
    </header>
  );
}

export default Header;
