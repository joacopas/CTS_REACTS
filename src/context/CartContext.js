import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //Agregar items al carrito

  const inToCart = (newItemCounter, item) => {
    if (isOnCart(item.id)) {
      alert("ya etsa en el carrito");
    } else {
      setCart([...cart, { ...item, newItemCounter }]);
      console.log(newItemCounter, item);
    }
  };

  //Revisrar si esta en el carrito
  const isOnCart = (id) => {
    const respuesta = cart.some((item) => item.id === id);
    return respuesta;
  };

  const vaciarCarrtio = () => {
    setCart([]);
  };

  //eliminar item

  const deleteOneFromCart = (id) => {
    //La llama CartScreen.
    setCart(cart.filter((item) => item.id !== id));
  };

  // sumar por cantidad

  const getCartQuantity = () => {
    let cartQuantity = 0;
    for (let i = 0; i < cart.length; i++) {
      cartQuantity += cart[i].quantity;
    }
    return cartQuantity;
  };

  const getCartTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    return totalPrice;
  };
  // sumar cantidad e items total de carrito

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        inToCart,
        vaciarCarrtio,
        deleteOneFromCart,
        getCartQuantity,
        getCartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
