import React from "react";
import { useEffect, useState } from "react";
import { getItems } from "../api/api";
import ItemList from "./itemList";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getItems().then(function (productos) {
      console.log(productos);
      setProductos(productos);
    });
  }, []);
  return (
    <>
      <h1 className="listContainer"> {greeting}</h1>
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}

export default ItemListContainer;
