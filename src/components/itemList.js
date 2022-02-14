import React from "react";
import Item from "./item";
import "./itemList.css";

function itemList({ productos }) {
  return (
    <section className="itemsList container mt-5">
      {productos.map(function (item) {
        return <Item key={item.id} item={item} />;
      })}
    </section>
  );
}

export default itemList;
