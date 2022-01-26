import React from "react";
import CartWidget from "./CartWidget";
import ctsLogo from "../assets/logo_cts.png";
import "../components/navbar.css";

const navbar = () => {
  return (
    <nav className="App-nav">
      <img className="App-logo" src={ctsLogo} alt="Logo Crea Tu Spot" />
      <h1 className="brandName">#CREATUSPOT</h1>
      <ul className="menuList ">
        <li className="listItem">
          <a href="#">Inicio</a>
        </li>
        <li className="listItem">
          <a href="#">Productos</a>
        </li>
        <li className="listItem">
          <a href="#">Nosotros</a>
        </li>
        <li className="listItem">
          <a href="#">Contacto</a>
        </li>
      </ul>
      <ul className="navList">
        <li className="listItem loginBtn">Log in</li>
        <li className="listItem RegisterBtn">Registrarme</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default navbar;
