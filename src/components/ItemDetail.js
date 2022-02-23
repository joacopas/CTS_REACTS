import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  const [counter, setCounter] = useState(false);
  const { inToCart } = useContext(CartContext);

  function onAddItem(newItemCounter) {
    setCounter(true);
    inToCart(newItemCounter, item);
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
              <Link to="/Cart">
                <button className="goToCart">Ir al carrito</button>
              </Link>
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
