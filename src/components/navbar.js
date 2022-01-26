import React from "react";
import CartWidget from "./CartWidget";
import ctsLogo from "../assets/logo_cts.png";
import "../components/navbar.css";

const navbar = () => {
  return (
    <nav className="nav">
      <div className="container ">
        <img className="App-logo" src={ctsLogo} alt="Logo Crea Tu Spot" />
        <h4 className="justify-content-start">#CREATUSPOT</h4>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Contacto</a>
          </li>
        </ul>
        {/* <ul className="navSignup d-flex justify-content-end">
          <li className="listItem">
            <a className="nav-link ">Log In</a>
          </li>
          <li className="listItem">
            <a className="nav-link ">Registrarme</a>
          </li>
        </ul> */}
        <div className="d-flex">
          <a className="nav-link ">Log In</a>
          <a className="nav-link ">Registrarme</a>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default navbar;
