import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    vaciarCarrtio,
    deleteOneFromCart,
    getItemQuantity,
    getCartQuantity,
    getCartTotalPrice,
    buyAll,
  } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h2>Aun no hay poroductos en el carrito</h2>
          <button className="btn btnHome">
            <Link to={"/"}>Inicio</Link>
          </button>
        </>
      ) : (
        <div className="cartContainer ">
          <div className="cartItem">
            {cart.map((cart) => (
              <div key={cart.id} className="cartItemContainer">
                <img src={cart.itemImg} className="cartItemImg"></img>
                <h3 className="cartItemTitle">{cart.title}</h3>
                <p className="cartItemCuantity d-flex">
                  Cantidad: {cart.newItemCounter}
                </p>
                <p className="cartItemPrice">Precio: ${cart.precio}</p>
                <button
                  className="deleteItemBtn btn"
                  onClick={() => deleteOneFromCart(cart.id)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="resumenContainer">
            <p>Cantidad de Items: {getCartQuantity()}</p>
            <p className="totalPrice">Precio Total: ${getCartTotalPrice()} </p>
            <div className="deleteAllBtnContainer">
              <button
                onClick={vaciarCarrtio}
                className="d-flex btn deleteAllBtn"
              >
                Vaciar el carrito
              </button>
              <button onClick={buyAll} className="d-flex btn buyAllBtn">
                Comprar
              </button>
            </div>
          </div>

          {/* mostrar totoal de productios */}
        </div>
      )}
    </>
  );
};

export default Cart;
