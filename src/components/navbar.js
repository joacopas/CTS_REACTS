import React from "react";
import CartWidget from "./CartWidget";
import ctsLogo from "../assets/logo_cts.png";
import "../components/navbar.css";
import { Link, NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="nav">
      <div className="container ">
        <Link to={`/`}>
          <img className="App-logo" src={ctsLogo} alt="Logo Crea Tu Spot" />
          <h4 className="justify-content-start">#CREATUSPOT</h4>
        </Link>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink to={`/`} className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="btn-group btn-sm">
              <NavLink to={`/productos`} className="">
                <div class="dropdown ">
                  <button
                    className="btn nav-link dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Productos
                  </button>

                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li className="dropdownListItem">
                      <Link to={`/category/fogoneros`}>Fogoneros</Link>
                    </li>
                    <li className="dropdownListItem">
                      <Link to={`/category/cubiertos`}>Cubiertos</Link>
                    </li>
                    <li className="dropdownListItem">
                      <Link to={`/category/tablas`}>Tablas</Link>
                    </li>
                    <li className="dropdownListItem">
                      <Link to={`/category/accesorios`}>Accesorios</Link>
                    </li>
                    <li className="dropdown-divider"> </li>

                    <li className="dropdownListItem">
                      <Link to={`/productos`}>Todos los productos</Link>
                    </li>
                  </ul>
                </div>
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to={`/nosotros`} className="nav-link">
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/contacto`} className="nav-link">
              Contacto
            </NavLink>
          </li>
        </ul>

        <div className="d-flex">
          <ul className="nav">
            <li className="nav-link">
              <NavLink to={`/login`}>Log in</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to={`/registro`}>Registrarse</NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default navbar;
