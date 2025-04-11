import React from "react";
import "./FitnessPlanSection.css";
import "./About.css";

const FitnessPlanSection = () => {
  return (
    <section className="fitness-plan-section para" id="fitness">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="about-title heading" data-aos="fade-right">
            FITNESS IS MORE THAN <br /><span className="span2"> JUST A WORKOUT </span>
          </h2>
          <ul className="benefits-list" data-aos="fade-right">
            <li>Improved Health and Longevity</li>
            <li>Boosted Mental Clarity and Focus</li>
            <li>Confidence and Empowerment</li>
          </ul>
          <div className="cta-buttons" data-aos="fade-right">
            <button className="join-button">Join now</button>
            <button className="contact-button">Contact us</button>
          </div>
        </div>
        <div className="image-gallery" data-aos="fade-left">
          <img src="./img/fi3.png" alt="Person using leg press machine" className="gallery-image ma" />
        </div>
      </div>
      <div className="satisfied-customers" >
        <div className="customer-avatars">
          <img src="./img/fi.png" alt="Customer 1" className="avatar" />
          <img src="./img/fi1.png" alt="Customer 2" className="avatar" />
          <img src="./img/fi2.png" alt="Customer 3" className="avatar" />
        </div>
        <p>10K+ Satisfied Customers</p>
      </div>
    </section>
  );
};

export default FitnessPlanSection;
