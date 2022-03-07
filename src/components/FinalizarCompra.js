import { addDoc, collection } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { db } from "../firebase";
import { CartContext } from "../context/CartContext";

function FinalizarCompra() {
  //finalizar compra
  const { cart, getCartTotalPrice } = useContext(CartContext);

  const [id, setOrderId] = useState([]);
  const [buyerName, setBuyerName] = useState([]);
  const [surname, setSurname] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);

  const handleNameChange = (event) => setBuyerName(event.target.value);
  const handleSurnameChange = (event) => setSurname(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const submitForm = (event) => {
    event.preventDefault();

    //VAlidar datos
    if (![buyerName, surname, phone, email].some((field) => field === "")) {
      console.log("todo bien");

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
          alert(newOrder);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  };

  return (
    <div className="formProduct">
      <h1>Finalizar compra</h1>
      <form onSubmit={submitForm}>
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

        <button className="add-to-cart-button btn" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
}

export default FinalizarCompra;
