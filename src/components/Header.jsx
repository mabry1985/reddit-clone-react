import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../assets/React-icon.png';

function Header() {
  return (
    <div>
      <img src={logo} />
      <h1 className="title">Reddit</h1>
      <span id="link">
        <Link to="/">Home </Link>|
        <Link to="/about"> About</Link>
      </span>
      <hr />
    </div>
  );
}

export default Header;
