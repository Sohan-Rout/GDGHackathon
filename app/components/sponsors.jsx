"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SponsorsCarousel = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setContainerWidth(window.innerWidth);
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const sponsors = [
    "/smash.png",
    "/sybgen.png", 
    "/CodingNinjas.png",
    "/gloskee.png",
    "/Unstop.png",
    "/codecrafters.png",
  ];

  // Calculate how many copies we need based on screen width
  const itemWidth = 168; // 120px min-width + 48px gap
  const copiesNeeded = Math.ceil(containerWidth / (sponsors.length * itemWidth)) + 2;
  const sponsorsLoop = Array(copiesNeeded).fill(sponsors).flat();

  return (
    <>
      <h2 className="text-neutral-500 text-4xl mb-2 md:mt-6 mt-14 text-center">Our Sponsors</h2>
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          background: "rgba(0,0,0,0.02)",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        {/* Gradient masks for smooth edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100px",
            height: "100%",
            background: "linear-gradient(to right, rgba(255,255,255,0.8), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "100px", 
            height: "100%",
            background: "linear-gradient(to left, rgba(255,255,255,0.8), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        
        <motion.div
          style={{
            display: "flex",
            filter: "grayscale(100%)",
            alignItems: "center",
            height: "100%",
            gap: "3rem",
          }}
          animate={{
            x: [-itemWidth * sponsors.length, 0]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {sponsorsLoop.map((src, index) => (
            <motion.div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                minWidth: "120px",
              }}
              whileHover={{
                scale: 1.1,
                filter: "grayscale(0%)",
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                style={{
                  height: "60px",
                  width: "auto",
                  maxWidth: "120px",
                  objectFit: "contain",
                  userSelect: "none",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SponsorsCarousel;