"use client";

import React, { useState, useRef, useEffect } from "react";
import StarRating from "./StarRating";
import "./TrainersSection.css";
import "./About.css";

const originalTrainers = [
  {
    id: 1,
    name: "Borney Exiteid",
    image: "./img/t1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Elsa Windia",
    image: "./img/t7.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Geourge Aryo",
    image: "./img/t3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Elsa Windia",
    image: "./img/t8.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Geourge Aryo",
    image: "./img/t6.jpg",
    rating: 5,
  },

];

const TrainersSection = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const [trainers, setTrainers] = useState([]);

  // Initialize with cloned trainers for infinite scroll
  useEffect(() => {
    setTrainers([...originalTrainers, ...originalTrainers, ...originalTrainers]);
  }, []);

  const scrollToTrainer = (index) => {
    const container = containerRef.current;
    const cards = container.querySelectorAll(".trainer-card");
    const realIndex = index % originalTrainers.length;
    const centerIndex = realIndex + originalTrainers.length; // Scroll to middle section

    if (container && cards[centerIndex]) {
      container.scrollTo({
        left: cards[centerIndex].offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveDot(realIndex);
    }
  };

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const cardWidth = container.querySelector(".trainer-card")?.offsetWidth || 0;
    const gap = 40;
    const totalCardWidth = cardWidth + gap;

    if (totalCardWidth > 0) {
      const newActiveDot = Math.round(scrollPosition / totalCardWidth) % originalTrainers.length;
      setActiveDot(newActiveDot);

      // Infinite scroll logic
      const totalWidth = originalTrainers.length * totalCardWidth;
      const middleSectionStart = totalWidth;
      const middleSectionEnd = middleSectionStart + totalWidth;

      if (scrollPosition < middleSectionStart - containerWidth) {
        // Snap to middle section when scrolling left
        container.scrollLeft = scrollPosition + totalWidth;
      } else if (scrollPosition > middleSectionEnd) {
        // Snap to middle section when scrolling right
        container.scrollLeft = scrollPosition - totalWidth;
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = "grabbing";
    containerRef.current.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.removeProperty("user-select");
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = "grab";
    containerRef.current.style.removeProperty("user-select");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="trainers-section">
      <h2 className="about-title heading">
        <span style={{ color: 'white' }}>MEET OUR </span> <span className="highlight"><br />PROFESSIONAL TRAINERS</span>
      </h2>
      <p className="section-description para">
        Our highly rated trainers are here to help you break barriers and reach new heights. With their expertise, you'll stay on track and exceed your fitness goals.
      </p>

      <div
        className="trainers-container"
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {trainers.map((trainer, index) => (
          <div key={`${trainer.id}-${index}`} className="trainer-card">
            <img
              src={trainer.image || "/placeholder.svg"}
              alt={trainer.name}
              className="trainer-image"
            />
            <div className="trainer-info">
              <h3 className="trainer-name">{trainer.name}</h3>
              <p className="trainer-title">Rate Trainer :</p>
              <StarRating rating={trainer.rating} />
            </div>
          </div>
        ))}
      </div>

      <div className="dots-container">
        {originalTrainers.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeDot ? "active" : ""}`}
            onClick={() => scrollToTrainer(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;