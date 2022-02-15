import React, { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

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

  function addToCart() {
    console.log();
    onAdd(counter);
  }

  return (
    <div className="counterCard">
      {/* <select onChange={onChangeCounter} className="detailSelect">
        {Array.from(Array(stock).keys()).map(function (num) {
          return (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          );
        })}
      </select> */}
      <fieldset className="counterBox ">
        <button onClick={restItem} className="btnRest">
          -
        </button>
        <p className="counter">{counter}</p>
        <button onClick={addItem} className="btnAdd">
          +
        </button>
      </fieldset>
      <div className="ItemBtn">
        <button onClick={addToCart} className="btnAddToCart">
          Agregar al carrito
        </button>

        <Link to={`/cart`}>
          <button className="btnVerItem">Comprar</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemCount;
