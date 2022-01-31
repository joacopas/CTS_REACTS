import React from "react";
import "./item.css";
import ItemCount from "./ItemCount";

function Item({ item }) {
  return (
    <div className="itemCard">
      <h3 className="itemTitle">{item.title}</h3>
      <img src={item.itemImg} alt="imagne de l producto" className="itemImg" />
      <p className="itemPrice">Precio: {item.precio}</p>
      <ItemCount />
    </div>
  );
}

export default Item;
