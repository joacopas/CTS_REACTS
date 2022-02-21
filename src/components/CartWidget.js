import React from "react";
import { Link } from "react-router-dom";
import carritoImg from "../assets/carrito.png";
import "../components/cartWidget.css";

function cartWidget() {
  return (
    <Link to={`/Cart`} className="">
      <div className="cart">
        <img src={carritoImg} className="carritoImg" alt="Carrito" />
        <p className="itemsNumber">0</p>
      </div>
    </Link>
  );
}

export default cartWidget;
