import React from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  return (
    <div className="detailContainer container">
      <img src={item.itemImg} alt="Imagen de producto" className="detailImg" />
      <div>
        <h3 className="detailTitle">{item.title}</h3>
        <p className="Detalle">Detalle de producto blablalbabla</p>
        <p className="detailPrice"> ${item.precio}</p>
        <div className="Detail">
          <ItemCount stock={15} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
// defini mediante prop el producto
// mostrar el detaclle del producto
