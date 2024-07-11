import { useState, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
  const [cart, setCart] = useState([])

  function addToCart({dish, quantity, price, img}) {
    setCart(prevCart => [...prevCart, {dish, quantity, price, img}]);
  }

  function deleteInCart(dishToDelete) {
    setCart(prevCart => prevCart.filter(item => item.dish !== dishToDelete));
  }
  
  return (
    <CartContext.Provider value={{ cart, addToCart, deleteInCart }}>
      {children}
    </CartContext.Provider>
  );
}