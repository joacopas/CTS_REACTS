import react, { useState } from "react";
import "./AddItemContainer.css";

const AddItemContainer = () => {
  //Estados con los campos de los formularios
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDecription] = useState("");
  const [precio, setPrecio] = useState("");

  // funciones para manejar el cambio en os inputs
  const handleTitleChange = (event) => setTitle(event.targe.value);
  const handleDescriptionChange = (event) => setDecription(event.targe.value);
  const handlePrecioChange = (event) => setPrecio(event.targe.value);
  const handleCategoryChange = (event) => setCategory(event.targe.value);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(title);
  };

  const setImage = () => {};

  return (
    <div className="formProduct">
      <h1>Agragar Producto</h1>
      <form onSubmit={onSubmit}>
        <div className="inputItem">
          <label>Nombre del producto</label>
          <input
            value={title}
            onChange={handleTitleChange}
            name="title"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>Descricion del producto</label>
          <input
            value={title}
            onChange={handleDescriptionChange}
            name="description"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>categoria del producto</label>
          <input
            value={title}
            onChange={handleCategoryChange}
            name="category"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>Precio del producto</label>
          <input
            value={title}
            onChange={handlePrecioChange}
            name="price"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>imagen del producto</label>
          <input
            value={title}
            onChange={(e) => {
              setImge(e.target.files[0]);
            }}
            type="file"
          ></input>
        </div>
        <button className="add-to-cart-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddItemContainer;
