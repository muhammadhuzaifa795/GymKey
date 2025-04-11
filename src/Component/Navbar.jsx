import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    setScrolling(true); // Change background on navigation
  };

  return (
    <nav className={`navbar ${scrolling || isOpen ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <a href="#home" className="logo">
          <img src="./img/logo1.png" alt="Logo" />
        </a>
      </div>

      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link" onClick={handleNavClick}>HOME</a>
        <a href="#about" className="nav-link" onClick={handleNavClick}>ABOUT</a>
        <a href="#why" className="nav-link" onClick={handleNavClick}>WHY </a>
        <a href="#pricing" className="nav-link" onClick={handleNavClick}>PRICING</a>
        <a href="#fitness" className="nav-link" onClick={handleNavClick}>FITNESS</a>
        <button className="download-btn para" >DOWNLOAD APP</button>
      </div>
    </nav>
  );
};

export default Navbar;
