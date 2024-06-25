import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="./logo.svg" alt="Logo" />
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          <button className="login">Login</button>
          <button className="signup">Sign-up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;