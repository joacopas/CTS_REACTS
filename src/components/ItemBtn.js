import React from "react";
import "./ItemCount.css";
import "./ItemBtn.css";
function ItemBtn({ item }) {
  function onAdd() {
    alert("Usted agrego un item al carrito");
  }
  return (
    <div className="counterCard">
      <div className="">
        <button className="btnAdd" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemBtn;
