"use client";

import { createContext, useContext, useState } from "react";

const CheckoutModalContext = createContext();

export function CheckoutModalProvider({ children }) {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productName) => {
    setCart((prev) => prev.filter((item) => item.name !== productName));
  };

  const updateCartQuantity = (productName, quantity) => {
    if (quantity < 1) {
      removeFromCart(productName);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.name === productName ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CheckoutModalContext.Provider
      value={{
        showCheckoutModal,
        setShowCheckoutModal,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
      }}
    >
      {children}
    </CheckoutModalContext.Provider>
  );
}

export function useCheckoutModal() {
  const context = useContext(CheckoutModalContext);
  if (!context) {
    throw new Error(
      "useCheckoutModal must be used within a CheckoutModalProvider",
    );
  }
  return context;
}
