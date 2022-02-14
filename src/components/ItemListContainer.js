import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api/api";
import ItemList from "./itemList";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getItems().then(function (productos) {
      if (!category) {
        setProductos(productos);
      } else {
        const itemsfiltrados = productos.filter((producto) => {
          return producto.category === category;
        });
        setProductos(itemsfiltrados);
      }
    });
  }, [category]);
  return (
    <>
      <h1 className="listContainer mt-6"> {greeting}</h1>
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p className="loading">Cargando...</p>
      )}
    </>
  );
}

export default ItemListContainer;
