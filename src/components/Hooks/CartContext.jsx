import React, { createContext, useContext, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product_id === product.product_id
      );
      if (existingItem) {
        toast.warn("Product Already Added In Cart!");
        return prevItems.map((item) =>
          item.product_id === product.product_id ? { ...item } : item
        );
      } else {
        toast.success("Product Added To Cart!");
        return [...prevItems, { ...product }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
      {children}
    </CartContext.Provider>
  );
};
