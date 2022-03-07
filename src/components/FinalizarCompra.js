import { addDoc, collection } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { db } from "../firebase";
import { CartContext } from "../context/CartContext";

function FinalizarCompra() {
  //finalizar compra
  const { cart, getCartTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState([]);
  const [buyerName, setBuyerName] = useState([]);
  const [surname, setSurname] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);

  const handleNameChange = (event) => setBuyerName(event.target.value);
  const handleSurnameChange = (event) => setSurname(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const buyAll = () => {
    //creo la orden
    const newOrder = {
      date: new Date(),
      buyer: [buyerName, surname, phone, email],
      items: cart,
      total: getCartTotalPrice(),
    };
    console.log(newOrder);

    //creo el ticket en firebase collection
    addDoc(collection(db, "ticket"), newOrder)
      .then((res) => {
        setOrderId(res.id);
        console.log(newOrder);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="formProduct">
      <h1>Finalizar compra</h1>
      <form>
        <div className="inputItem">
          <label>Nombre</label>
          <input
            value={buyerName}
            onChange={handleNameChange}
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>Apellido</label>
          <input
            value={surname}
            onChange={handleSurnameChange}
            name="surname"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>Telefono</label>
          <input
            value={phone}
            onChange={handlePhoneChange}
            name="phone"
            type="text"
          ></input>
        </div>
        <div className="inputItem">
          <label>Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            name="email"
            type="text"
          ></input>
        </div>

        <button
          onClick={buyAll}
          className="add-to-cart-button btn"
          type="submit"
        >
          Finalizar compra
        </button>
      </form>
    </div>
  );
}

export default FinalizarCompra;
