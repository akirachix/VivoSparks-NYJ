import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './index.css';
import pic2 from '../assets/pic2.png';
import React from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <div className="navbar">
        <div className="nav">
          <img src={pic2} alt="logo" id="logo" />
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-container ${isMenuOpen ? 'active' : ''}`}>

          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/videos" className="nav-link">Video</Link></li>
          <li><Link to="/writing" className="nav-link">Blog</Link></li>
          <li><Link to="/podcast" className="nav-link">Podcast</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
