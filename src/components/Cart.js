import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    vaciarCarrtio,
    deleteOneFromCart,
    getCartQuantity,
    getCartTotalPrice,
  } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h2>Aun no hay poroducto s volve al home</h2>
          <Link to={"/"} className="btn">
            home
          </Link>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <button onClick={() => deleteOneFromCart(item.id)}>X</button>
            </div>
          ))}
          <button onClick={vaciarCarrtio}>Vaciar el carrito</button>
          {/* mostrar totoal de productios */}

          <p>Cantidad de Items({getCartQuantity()})</p>
          <p>Precio Total (${getCartTotalPrice()})</p>
        </>
      )}
    </>
  );
};

export default Cart;
