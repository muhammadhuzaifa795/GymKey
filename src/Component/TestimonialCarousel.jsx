import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TestimonialCarousel.css";

const testimonials = [
  {
    name: "Sarah L",
    text: "Gym Key has been a game-changer! Earning points makes it fun, and the trainers truly care about my progress. I feel motivated every time I visit a gym, and it’s made my fitness journey so much easier.",
    image: ".\\img\\c1.avif",
  },
  {
    name: "Emily T",
    text: "From personalized workouts to nutritional advice, Gym Key helped me hit my muscle gain goals faster than I ever imagined! The one-on-one guidance and flexible gym access have been incredible for my progress.",
    image: ".\\img\\c2.avif",
  },
  {
    name: "Michael W",
    text: "I love the variety of gyms and services Gym Key connects me with. Fitness has never been more accessible! I can now try different gyms, explore various workouts, and never feel stuck in one routine.",
    image: ".\\img\\c3.avif",
  },
];


export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonial-section" style={{ overflowX: 'hidden' }}>
      <h2 className="wha">
        Real Results, <span className="clien">Real Stories </span>
      </h2>
      <div className="testimonial-carousel para">
        <button className="nav-button prev" onClick={prevTestimonial}>
          &lt;
        </button>
        <div className="testimonial-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>
              <div className="rating">★★★★★</div>
              <h3 className="client-name">{testimonials[currentIndex].name}</h3>
              <img
                className="client-image"
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="nav-button next" onClick={nextTestimonial}>
          &gt;
        </button>
      </div>
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

// npm install framer-motion
