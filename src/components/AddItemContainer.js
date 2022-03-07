import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import "./AddItemContainer.css";

const AddItemContainer = () => {
  //Estados con los campos de los formularios
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [precio, setPrecio] = useState(0);
  const [image, setImage] = useState();

  // funciones para manejar el cambio en os inputs
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handlePrecioChange = (event) => setPrecio(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    //validar los campos
    if ([title, category, description, precio].some((field) => field === "")) {
      console.log("todo mal");
    } else {
      //obtengo referencia de mi coleccion
      const itemCollection = collection(db, "items");
      // creo mi nuevo item
      const newItem = {
        title: title,
        description: description,
        precio: precio,
        category: category,
      };

      //agrego el item a mi collection
      addDoc(itemCollection, newItem)
        .then((doc) => {
          console.log("se guardo correctamente", doc.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="formProduct">
      <h1>Agragar Producto</h1>
      <form onSubmit={onSubmit}>
        <div className="inputItem">
          <label>Nombre del producto</label>
          <input value={title} onChange={handleTitleChange} type="text"></input>
        </div>
        <div className="inputItem">
          <label>Descricion del producto</label>
          <input
            value={description}
            onChange={handleDescriptionChange}
            name="description"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>categoria del producto</label>
          <input
            value={category}
            onChange={handleCategoryChange}
            name="category"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>Precio del producto</label>
          <input
            value={precio}
            onChange={handlePrecioChange}
            name="price"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>imagen del producto</label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          ></input>
        </div>
        <button className="add-to-cart-button btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddItemContainer;
