import React from "react";
import "./ItemListContainer.css";

function ItemListContainer(greeting) {
  return (
    <>
      <h2 className="listContainer">
        {" "}
        Este es el List container item que no tiene greeting porque no me anda
      </h2>
    </>
  );
}

export default ItemListContainer;
