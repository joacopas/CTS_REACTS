import React, { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

function ItemCount({ stock }) {
  const [counter, setCounter] = useState(0);

  // function addItem() {
  //   if (stock > 0) {
  //     if (counter >= 0 && counter < stock) {
  //       setCounter(counter + 1);
  //     }
  //   }
  // }

  // function restItem() {
  //   if (stock > 0) {
  //     if (counter >= 1) {
  //       setCounter(counter - 1);
  //     }
  //   }
  // }

  function onAdd() {
    alert(`Usted agrego ${counter} items al carrito`);
  }

  function AddToCart(event) {
    console.log(event.target.value);
  }

  return (
    <div className="counterCard">
      <select onChange={AddToCart} className="detailSelect">
        {Array.from(Array(stock).keys()).map(function (num) {
          return (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          );
        })}
      </select>
      <div className="ItemBtn">
        <button onClick={onAdd} className="btnAddToCart">
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
