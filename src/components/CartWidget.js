import React from "react";
import carritoImg from "../assets/carrito.png";
import "../components/cartWidget.css";

function cartWidget() {
  return (
    <div className="cart">
      <img src={carritoImg} className="carritoImg" alt="Carrito" />
      <p className="itemsNumber">0</p>
    </div>
  );
}

export default cartWidget;
