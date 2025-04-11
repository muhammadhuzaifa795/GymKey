import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content" data-aos='slide-right'>
        <h1 className="hero-title">
          Unlock Your <br /> <span className="highlight">Fitness Journey </span>
        </h1>
        <p className="hero-description para">
          Discover nearby gyms, earn points, and access exclusive fitness services. Your personalized fitness experience starts now!
        </p>
        <button className="cta-button heading">LET'S JOIN NOW</button>
      </div>
    </section>
  );
};

export default Hero;
