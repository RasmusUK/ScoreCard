import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/" className="header-title">Score Card +</a>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/games" className="nav-link">Games</a>
          </li>
          <li className="nav-item">
            <a href="/scores" className="nav-link">Scores</a>
          </li>
          <li className="nav-item">
            <a href="/players" className="nav-link">Profile</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="/logout" className="nav-link">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
