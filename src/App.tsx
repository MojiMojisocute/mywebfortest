import React from 'react';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Nav />

      <div className="banner">
        <a href="#">
          <img src="photo/ad1.jpg" alt="Advertisement" />
        </a>
      </div>

      <div className="book-section">
        <div className="section-title">
          <h2>หนังสือขายดี</h2>
          <a href="#">ดูทั้งหมด</a>
        </div>
        <div className="book-grid">
          {/* Add book items here */}
        </div>
      </div>

      <div className="book-section">
        <div className="section-title">
          <h2>หนังสือมาใหม่</h2>
          <a href="#">ดูทั้งหมด</a>
        </div>
        <div className="book-grid">
          {/* Add book items here */}
        </div>
      </div>
    </div>
  );
}

export default App;
