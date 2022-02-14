import React from "react";
import "./item.css";
import ItemBtn from "./ItemBtn";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="itemCard col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <Link to={`/item/${item.id}`}>
        <img
          src={item.itemImg}
          alt="imagen del producto"
          className="itemImg card-img-top"
        />
        <h3 className="itemTitle">{item.title}</h3>
      </Link>

      <p className="itemPrice"> ${item.precio}</p>
      <ItemBtn />
    </div>
  );
}

export default Item;
