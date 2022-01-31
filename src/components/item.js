import React from "react";
import "./item.css";
import ItemCount from "./ItemCount";

function Item({ item }) {
  return (
    <div className="itemCard">
      <img
        src={item.itemImg}
        alt="imagen del producto"
        className="itemImg card-img-top"
      />
      <h3 className="itemTitle">{item.title}</h3>
      <p className="itemPrice"> ${item.precio}</p>
      <ItemCount stock={15} />
    </div>
  );
}

export default Item;
