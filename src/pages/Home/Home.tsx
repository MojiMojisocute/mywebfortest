import React, { useState } from 'react';
import BookSection from '../../components/BookSection';
import Banner from '../../components/Banner';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Cart from '../../components/Cart';

const homeContainerStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    //need backend
  ]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div style={homeContainerStyle}>
      <Header />
      <SearchBar onCartClick={toggleCart} />
      <Banner />
      <BookSection title="หนังสือขายดี" />
      <BookSection title="หนังสือมาใหม่" />
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} items={cartItems} />
    </div>
  );
}

export default Home;