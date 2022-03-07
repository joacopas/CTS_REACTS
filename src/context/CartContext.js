import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //Agregar items al carrito

  const inToCart = (newItemCounter, item) => {
    if (isOnCart(item.id)) {
      //sumar cantidad
      getItemQuantity(newItemCounter, item);
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

  const getItemQuantity = (newItemCounter, item) => {
    const copia = [...cart];
    copia.forEach((producto) => {
      if (producto.id === item.id) {
        producto.newItemCounter += newItemCounter;
      }
    });
  };

  const getCartQuantity = () => {
    let cartQuantity = 0;
    for (let i = 0; i < cart.length; i++) {
      cartQuantity += cart[i].newItemCounter;
    }
    return cartQuantity;
  };

  const getCartTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].precio * cart[i].newItemCounter;
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
        getItemQuantity,
        getCartTotalPrice,
        getCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
