import React, { useContext } from "react";
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
        <h2>Aun no hay poroducto s volve al home</h2>
      ) : (
        <>
          {cart.map((item) => {
            <div>
              <p>{item.title}</p>
              <button onClick={deleteOneFromCart}>X</button>
            </div>;
          })}
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
