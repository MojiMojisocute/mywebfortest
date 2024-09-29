import React, { useState } from 'react';
import Header from '../components/Main/Header';
import SearchBar from '../components/Main/SearchBar';
import Banner from '../components/Main/Banner';
import BookSection from '../components/Main/BookSection';
import Cart from '../components/Main/Cart';
import { CartProvider, useCart } from '../components/Main/CartProvider';

function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, setCartItems } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 0) } : item
      )
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <SearchBar onCartClick={toggleCart} />
      <Banner />
      <BookSection title="หนังสือขายดี" method="best-selling"/>
      <BookSection title="หนังสือมาใหม่" method="newest"/>
      <Cart 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        items={cartItems} 
        updateQuantity={updateQuantity} 
      />
    </div>
  );
}

// Wrap the Home component with the CartProvider
const HomeWithProvider = () => (
  <CartProvider>
    <Home />
  </CartProvider>
);

export default HomeWithProvider;
