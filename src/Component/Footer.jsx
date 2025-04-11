import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer para">
      <div className="footer-container">
        <div className="brand">
          <h2>
            <img src="./img/logo1.png" alt="Logo" className="footer-logo" />
          </h2>
          <p className="p">Your ultimate ally in crushing fitness goals.</p>
        </div>
        <div className="links">
          <div>
            <h4>Sitemap</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Why</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Fitness</li>
              <li>Dwonlaod App</li>
            </ul>
          </div>
          <div>
            <h4>Social Media</h4>
            <div className="social-icons">
              <Instagram size={20} />
              <Twitter size={20} />
              <Facebook size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 GYMKEY</p>
        <div>
          <span>Terms of Use</span> | <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;