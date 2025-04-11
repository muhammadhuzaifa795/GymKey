import React from 'react';
import './WhyChooseUs.css';
import './About.css';

const features = [
  {
    id: '01',
    title: 'Access Nearby Gyms',
    description: 'Find and access a wide range of gyms tailored to your needs, right near you.'
  },
  {
    id: '02',
    title: 'Earn Points for Every Visit',
    description: 'The more you work out, the more points you earn! Unlock gym services and exclusive deals as you go.'
  },
  {
    id: '03',
    title: 'Expert Trainers at Your Service',
    description: 'Get personal attention from certified trainers dedicated to your success.'
  },
  {
    id: '04',
    title: 'Custom Fitness Plans',
    description: 'Whether you’re just starting or pushing for new goals, we offer plans that evolve with you.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" id='why'>
      <div className="why-container">
        <div className="why-header">
          <h2 className="about-title" data-aos='fade-up'>
            <span style={{ color: 'white' }} >WHY</span> <span className="highlight">CHOOSE US</span>
          </h2>
          <p className="why-subtitle para" data-aos='fade-up'>
            Fitness is easier when you have access to the right resources. With Gym Key, find gyms, earn points, and unlock personalized services to fast-track your results.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <span className="feature-number">{feature.id}</span>
              <h3 className="feature-title para">{feature.title}</h3>
              <p className="feature-description para">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;