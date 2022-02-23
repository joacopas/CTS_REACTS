import React from "react";
import "./ItemCount.css";
import "./ItemBtn.css";
import { Link } from "react-router-dom";
function ItemBtn({ item }) {
  // function onAdd() {
  //   alert("Usted agrego un item al carrito");
  // }
  return (
    <div className="counterCard">
      <div className="">
        <button className="btnAddToCartItem">Ver detalles</button>
      </div>
    </div>
  );
}

export default ItemBtn;
