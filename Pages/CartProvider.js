//React
import React,{useState,createContext} from 'react';

const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    console.log(dish)
    setCart([...cart, dish]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext }; 