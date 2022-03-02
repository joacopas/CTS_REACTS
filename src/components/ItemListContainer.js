import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api/api";
import ItemList from "./itemList";
import "./ItemListContainer.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

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

  useEffect(() => {
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
