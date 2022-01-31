import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount() {
  const [counter, setCounter] = useState(0);
  // const [msj, setMsj] = useState("Agregado al carrito");
  const stock = 15;

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
    <div className="counter">
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
      <button onClick={onAdd} className="btnAddToCart">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;

// //CLASE DE PRMISE Y MAP
// const productos = [
//   {
//     id: 2,
//     title: "Fogonero 120",
//     descripcion: "fogonero 120cm diametro",
//     precio: 25000,
//   },
//   {
//     id: 1,
//     title: "Fogonero 100",
//     descripcion: "fogonero 120cm diametro",
//     precio: 25000,
//   },
//   {
//     id: 3,
//     title: "Fogonero 75",
//     descripcion: "fogonero 120cm diametro",
//     precio: 25000,
//   },
// ];
// const promesa = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(productos);
//     // retorne de productos
//   }, 2000);
// });

// function getItems() {
//   console.log(promesa);
// }

// export { getItems };
