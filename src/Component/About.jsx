import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id='about' >
      <div className="about-container ">
        <div className="about-content">
          <h2 className="about-title" data-aos="fade-right">
            <span className='span2' > Gym Key,</span> YOUR GATEWAY TO <span className='span2' ><br /> Fitness Success</span>
            {/* <span className="highlight">EXPERIENCE</span> */}
          </h2>
          <div className="about-text para" data-aos="fade-right">
            <p>
              Gym Key redefines fitness by making it accessible, rewarding, and effective. Connecting users to top gyms in the area, the platform utilizes a unique points system that unlocks exclusive services with every visit. Whether the goal is fat loss, muscle gain, or overall strength improvement, Gym Key offers a wide variety of gyms, training programs, and expert guidance.
            </p>
            <p>
              The goal is to simplify the fitness journey, providing everything needed to turn aspirations into real results. With Gym Key, fitness becomes a more flexible and enjoyable experience, with a multitude of options for every fitness level and ambition.
            </p>
          </div>
          <button className="about-btn" data-aos="fade-right">ABOUT US</button>
        </div>
        <div className="about-image" data-aos="fade-left">
          <div className="image-frame"></div>
          <div className="image-container">
            <img
              src="/public/img/aboutus.png"
              alt="Fitness trainer"
            />
          </div>
        </div>
      </div>
      <div className="about-overlay"></div>
    </section>
  );
};

export default About;