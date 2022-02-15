import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  const [counter, setCounter] = useState(undefined);

  function onAddItem(newItemCounter) {
    console.log(newItemCounter);
    alert(`Agrego ${newItemCounter} items al carrito`);
    setCounter(newItemCounter);
  }

  return (
    <div className="detailContainer container">
      <div className="detailContainerInfo">
        <img
          src={item.itemImg}
          alt="Imagen de producto"
          className="detailImg"
        />
        <div className="detailBox">
          <div className="detailInfo">
            <h3 className="detailTitle">{item.title}</h3>
            <p className="detailPrice"> ${item.precio}</p>
            <p className="Detalle">{item.descripcion}</p>
          </div>

          <div className="DetailCounter">
            {!counter ? (
              <ItemCount stock={10} onAdd={onAddItem} initial={1} />
            ) : (
              <Link to="/cart">Ir al carrito</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
// defini mediante prop el producto
// mostrar el detaclle del producto
