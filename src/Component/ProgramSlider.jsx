import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Dumbbell, Timer, Weight } from 'lucide-react';
import { GiMuscularTorso } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";
import { GiHeartBeats } from "react-icons/gi";
import { IoIosNutrition } from "react-icons/io";
import './ProgramSlider.css';
import './About.css';


const programs = [
  {
    id: 1,
    title: 'Cardio Strength',
    description: 'Boost your stamina and burn fat with high-energy cardio. Build muscle and strength through powerful, results-driven training.',
    icon: GiHeartBeats
  },
  {
    id: 2,
    title: 'Fat Lose',
    description: 'Shed unwanted pounds with tailored fat-burning exercises. Transform your body with workouts that target fat loss.',
    icon: GiMuscularTorso
  },
  {
    id: 3,
    title: 'Muscle Gain',
    description: 'Grow lean, defined muscle through proven training techniques. Get stronger and more sculpted with every rep.',
    icon: GiMuscleUp
  },

  {
    id: 4,
    title: 'Nutritions',
    description: 'Power up with nutrition plans that fuel your workouts. Stay at your best with balanced diets designed for your fitness goals.',
    icon: IoIosNutrition
  }

];

const ProgramSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === programs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? programs.length - 1 : prevIndex - 1
    );
  };

  console.log(currentIndex);


  return (
    <section className="slider-section">
      <div className="slider-header">
        <h2 className='heading about-title'>Find Your  <span className='span2'>Fitness Focus</span></h2>
        <div className="slider-navigation">
          <button onClick={prevSlide} className="nav-button">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="butte">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="slider-container para"
        data-aos='fade-up'>
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div key={program.id} className="program-card">
                <div className="program-icon">
                  <Icon size={32} />
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramSlider;