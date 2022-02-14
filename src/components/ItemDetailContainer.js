import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api/api";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    getItems().then((items) => {
      const item = items.find((i) => i.id === Number(itemId));

      setItem(item);
    });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {!item ? <p>Cargando producto..</p> : <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;

// 1- ir a buscar con el get items la lista de productods
// 2- filtrar 1 producto (elegir cualquiera)
//3 guardar en un estado propio ese producto
// 4 pasarle el producto al componenete itemdetail
