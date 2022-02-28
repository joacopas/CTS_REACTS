import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api/api";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    // getItems().then((items) => {
    //   const item = items.find((i) => i.id === Number(itemId));

    //   setItem(item);
    // });

    const itemRef = doc(db, "item", itemId);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => {
        console.log(error);
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
