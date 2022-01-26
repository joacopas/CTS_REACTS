import React from "react";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <>
      <h2 className="listContainer">Somos {greeting}</h2>
    </>
  );
}

export default ItemListContainer;
