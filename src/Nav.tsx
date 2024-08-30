import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <header>
        <div className="logo">
          <img src="photo/Hamburger_icon.png" alt="Hamburger icon" />
          Ani Meb
        </div>
        <div className="logo-login">
          <a href="#">
            <img src="photo/userbar.png" alt="User profile icon" />
          </a>
          <a href="#">เข้าสู่ระบบ</a>
        </div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="ค้นหา" />
        <div className="icon-shopping">
          <img src="photo/iconbellbarshop.png" alt="Notification icon" />
          <img src="photo/likebook.png" alt="Like icon" />
          <img src="photo/linevector.png" alt="Vector lines" />
          <img src="photo/carshopping.png" alt="Shopping cart icon" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
