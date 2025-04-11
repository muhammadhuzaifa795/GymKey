import React, { useState, useEffect } from 'react';
import './Uparrow.css';

const Uparrow = ({ onClick = () => { }, disabled = false }) => {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show the button after scrolling 200px
    } else {
      setIsVisible(false); // Hide the button when scrolled to top
    }
  };

  // Hook to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#home">
      <button
        className={`up-arrow-button ${isVisible ? 'visible' : ''}`}
        onClick={onClick}
        disabled={disabled}
      >
        <img
          src="/img/up1.png"
          alt="Up Arrow"
          width="51"
          height="50"
        />
      </button>
    </a>
  );
};

export default Uparrow;
