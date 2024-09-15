import React from 'react';
import BookSection from '../../components/BookSection';
import Banner from '../../components/Banner';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Cart from '../../components/Cart';

function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>      
      <Header />
      <SearchBar />
      <Banner />
      <BookSection title="หนังสือขายดี" />
      <BookSection title="หนังสือมาใหม่" />
      <Cart />
    </div>
  );
}

export default Home;
