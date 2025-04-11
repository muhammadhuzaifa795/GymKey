import React, { useState } from "react";
import "./PricingSection.css";
import "./About.css";

const packages = [
  {
    name: "Basic Package",
    price: 25,
    period: "per month, billed annually",
    features: [
      "Unlimited Gym Access",
      "2x Fitness Consultant",
      "Nutrition Tracking",
      "1x Free Supplement",
      "3 Days per week",
      "Personal Trainer",
    ],
  },
  {
    name: "Mid Package",
    price: 55,
    period: "per month, billed annually",
    features: [
      "Unlimited Gym Access",
      "4x Fitness Consultant",
      "Nutrition Tracking",
      "3x Free Supplement",
      "5 Days per week",
      "Personal Trainer",
    ],
    bestOffer: true,
  },
  {
    name: "Pro Package",
    price: 75,
    period: "per month, billed annually",
    features: [
      "Unlimited Gym Access",
      "7x Fitness Consultant",
      "Nutrition Tracking",
      "5x Free Supplement",
      "Gym Card",
      "Personal Trainer",
    ],
  },
  {
    name: "Athlete Package",
    price: 105,
    period: "per month, billed annually",
    features: [
      "Unlimited Gym Access",
      "Free Clothes",
      "All Training Program",
      "Free Fitness Consultant",
      "Free Supplement",
      "Gym Card",
    ],
  },
];

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="pricing-section" id="pricing">
      {/* <h2 className="pricing-title">Pricing</h2> */}
      <h3 className="about-title heading" style={{ textAlign: 'center' }}>Our List <span className="span2">Packages</span></h3>
      <div className="billing-toggle">
        <button className={`toggle-btn ${isMonthly ? "active" : ""}`} onClick={() => setIsMonthly(true)}>
          <span className="para">Billed Monthly</span>
        </button>
        <button className={`toggle-btn ${!isMonthly ? "active" : ""}`} onClick={() => setIsMonthly(false)}>
          <span className="para">Billed Yearly</span>
        </button>
      </div>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div key={index} className={`package ${pkg.bestOffer ? "best-offer" : ""}`}>
            {pkg.bestOffer && <div className="best-offer-label">Best Offer</div>}
            <h4 className="package-name">{pkg.name}</h4>
            <div className="package-price">
              ${pkg.price}
              <span className="package-period"> {pkg.period}</span>
            </div>
            <ul className="package-features">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="register-btn">Register Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
