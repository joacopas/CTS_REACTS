import React from "react";
import Item from "./item";
import "./itemList.css";

function itemList({ productos }) {
  return (
    <div className="itemsList container">
      {productos.map(function (item) {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}

export default itemList;
