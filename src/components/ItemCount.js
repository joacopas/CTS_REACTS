import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount() {
  const [counter, setCounter] = useState(0);
  // const [msj, setMsj] = useState("Agregado al carrito");

  function addItem() {
    if (stock > 0) {
      if (counter >= 0 && counter < stock) {
        setCounter(counter + 1);
      }
    }
  }

  const stock = 0;

  function restItem() {
    if (stock > 0) {
      if (counter >= 1) {
        setCounter(counter - 1);
      }
    }
  }

  return (
    <div className="itemCard">
      <h4 className="itemTitle ">Item </h4>
      <fieldset className="counterBox d-flex">
        <button onClick={restItem} className="btnRest">
          -
        </button>
        <p className="counter">{counter}</p>
        <button onClick={addItem} className="btnAdd">
          +
        </button>
      </fieldset>
      <button className="btnAddToCart">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
