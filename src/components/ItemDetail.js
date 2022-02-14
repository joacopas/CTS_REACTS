import React from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  return (
    <div className="detailContainer container">
      <div className="detailContainerInfo">
        <img
          src={item.itemImg}
          alt="Imagen de producto"
          className="detailImg"
        />
        <div className="detailBox">
          <div className="detailInfo">
            <h3 className="detailTitle">{item.title}</h3>
            <p className="detailPrice"> ${item.precio}</p>
            <p className="Detalle">{item.descripcion}</p>
          </div>

          <div className="DetailCounter">
            <ItemCount stock={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
// defini mediante prop el producto
// mostrar el detaclle del producto
