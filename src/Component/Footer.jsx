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
            <h4>SITEMAP</h4>
            <ul>
              <a href="#home" className="nav-link"><li>Home</li></a>
              <a href="#about" className="nav-link"><li>About</li></a>
              <a href="#why" className="nav-link"><li>Why</li></a>
              <a href="#pricing" className="nav-link"><li>Pricing</li></a>


            </ul>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <ul>
              <a href="#fitness" className="nav-link"><li>Fitness</li></a>
              <a href="https://play.google.com/store/apps/details?id=com.innovadorsolutions.gymkey&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="nav-link"><li>Download App</li></a>
            </ul>
          </div>
          <div>
            <h4>SOCIAL MEDIA</h4>
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
        {/* <div>
          <span>Terms of Use</span> | <span>Privacy Policy</span>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;