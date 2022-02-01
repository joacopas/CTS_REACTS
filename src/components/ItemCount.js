import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock }) {
  const [counter, setCounter] = useState(0);

  function addItem() {
    if (stock > 0) {
      if (counter >= 0 && counter < stock) {
        setCounter(counter + 1);
      }
    }
  }

  function restItem() {
    if (stock > 0) {
      if (counter >= 1) {
        setCounter(counter - 1);
      }
    }
  }

  function onAdd() {
    alert(`Usted agrego ${counter} items al carrito`);
  }

  return (
    <div className="counterCard">
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
      <div className="ItemBtn">
        <button onClick={onAdd} className="btnAddToCart">
          Agregar al carrito
        </button>
        <a href="#">
          <button className="btnVerItem">Ver detalles</button>
        </a>
      </div>
    </div>
  );
}

export default ItemCount;
