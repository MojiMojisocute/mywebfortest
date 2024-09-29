import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Create a context for the cart
const CartContext = createContext<{
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
} | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Book 1', price: 200, quantity: 1 },
  ]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
