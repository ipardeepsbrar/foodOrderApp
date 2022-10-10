import React, { useState } from "react";

const cartContext = React.createContext({
  cartOpen: false,
  cartClick: () => {},
  closeCart: () => {},
});

export const ModalContext = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  const cartClickHandler = () => {
    setCartOpen(true);
  };
  const closeCartHandler = () => {
    setCartOpen(false);
  };
  return (
    <cartContext.Provider
      value={{
        cartOpen: cartOpen,
        cartClick: cartClickHandler,
        closeCart: closeCartHandler
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;
