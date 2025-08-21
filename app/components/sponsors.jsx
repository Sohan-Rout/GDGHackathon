"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Sponsors = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".carousel-track", {
        x: "-50%",
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    }, carouselRef);

    return () => ctx.revert();
  }, []);

  const sponsors = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
  ];

  return (
    <div className="relative w-full flex items-center overflow-hidden py-6" ref={carouselRef}>
      <div className="z-10 pl-8 pr-8 text-lg font-semibold whitespace-nowrap">
        Powered by
      </div>

      {/* Gradient overlays for fading */}
      <motion.div
        className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Infinite Carousel */}
      <div className="overflow-hidden w-full">
        <div className="carousel-track flex gap-12">
          {[...sponsors, ...sponsors].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`sponsor-${i}`}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;