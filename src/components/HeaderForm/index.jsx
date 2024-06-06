import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import Home from "../../pages/Home";
import Arrow from "../../assets/Seta.png";
import NavbarLogo from "../../assets/LogoNavbar.png";

function HeaderForm() {
  return (
    <header>
      <NavLink to="/">
        <a href={Home}>
          <img src={Arrow} alt="" />
        </a>
      </NavLink>

      <NavLink className="logoNav" to="/">
        <a href={Home}>
          <img className="logo" src={NavbarLogo} alt="" />
        </a>
      </NavLink>
    </header>
  );
}

export default HeaderForm;
