import React from "react";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <>
      <h1 className="listContainer"> {greeting}</h1>
      <ItemCount />
    </>
  );
}

export default ItemListContainer;
