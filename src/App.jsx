import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import ProgramSlider from './Component/ProgramSlider'
import Fitnessplan from './Component/Fitnessplan'
import About from './Component/About'
import WhyChooseUs from './Component/WhyChooseUs'
import TrainersSection from './Component/TrainersSection'
import NutritionSection from './Component/NutritionSection'
import TestimonialCarousel from './Component/TestimonialCarousel'
import FitnessPlanSection from './Component/FitnessPlanSection'
import SubscriptionForm from './Component/SubscriptionForm'
import Footer from './Component/Footer'
import PricingSection from './Component/PricingSection'
import Uparrow from './Component/Uparrow'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();  // Add this line to refresh AOS
  }, []);

  return (

    <>
      <Uparrow />
      <Navbar />
      <Hero />
      <ProgramSlider />
      <Fitnessplan />
      <About />
      <WhyChooseUs />
      <NutritionSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialCarousel />
      <FitnessPlanSection />
      <SubscriptionForm />
      <Footer />
    </>
  )
}

export default App
