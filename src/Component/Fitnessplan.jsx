import React from 'react';
import { Dumbbell, Bike, Weight, Cog as Yoga, FileWarning as Running } from 'lucide-react';
import { LuDumbbell } from 'react-icons/lu';
import { FaPersonRunning } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import './Fitnessplan.css';
import './About.css';

const fitnessPrograms = [
  {
    id: 1,
    title: 'Weight Loss Solutions',
    icon: GiBodyHeight,
    description:
      "Burn fat with targeted weight loss plans designed just for you. Achieve lasting results with expert guidance."
  },
  {
    id: 2,
    title: 'Group Fitness Classes',
    icon: GrYoga,
    description:
      'Stay motivated and connect with others in our high-energy group workouts. It\'s fun, effective, and community- driven.'
  },
  {
    id: 3,
    title: 'Personalized Training',
    icon: Bike,
    description:
      'Get a workout plan custom-made for your fitness level and goals. Work with expert trainers who understand your needs.'
  },
  {
    id: 4,
    title: 'Muscle Building Programs',
    icon: GiWeightLiftingUp,
    description:
      "Strengthen your muscles and build the body you’ve always wanted. Our muscle gain programs are designed to maximize results."
  },
  {
    id: 5,
    title: 'Fitness Assessments',
    icon: LuDumbbell,
    description:
      'Start your journey with a complete fitness assessment. Track your progress and stay on the path to improvement.'
  },
  {
    id: 6,
    title: 'Recovery & Injury Prevention',
    icon: FaPersonRunning,
    description:
      'Improve flexibility, speed up recovery, and prevent injury with specialized training techniques and expert advice.'
  }
];

const Fitnessplan = () => {
  return (
    <section className="fitness-section">
      <div className="fitness-container">
        <h2 className=" about-title heading">
          Your Fitness & <span className="highlight">Your Way</span>

        </h2>

        <div className="fitness-grid">
          {fitnessPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <div key={program.id} className="fitness-card ">
                <div className="icon-container">
                  <Icon size={40} />
                </div>
                <h3 className='para'>{program.title}</h3>
                <p className='para'>{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fitnessplan;
