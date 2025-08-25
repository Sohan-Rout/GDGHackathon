"use client";
import React from "react";
import { HiSparkles } from "streamui-deps";

const defaultCards = [
  { postId: "DNtKM0DXuGs" },
  { postId: "DNv4C38ZCQc" },
  { postId: "DNtNtdp5Mfr" },
  { postId: "DNtQzHk5PLe" },
  { postId: "DNtQdsuZDSS" },
];

const FeaturedSection = ({
  title = "Follow us on Instagram",
  description = "Never miss any updates.",
  tag = "",
  ctaText = "Social Handles",
  ctaHref = "",
  cards,
}) => {
  const data = cards && cards.length > 0 ? cards : defaultCards;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-xs uppercase tracking-widest text-neutral-500">{tag}</p>
        <h1 className="text-3xl md:text-4xl text-black font-bold">{title}</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-xl">{description}</p>
        <a
          href={ctaHref}
          className="mt-4 px-6 py-2 rounded-full flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform duration-300"
        >
            <HiSparkles className="text-xl"/>{ctaText}
        </a>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[350px] gap-4">
        {data.map((card, index) => {
          const isLarge = index === 0;

          return (
            <div
              key={index}
              className={`relative overflow-hidden shadow-xl rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-black/20 dark:border-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center ${
                isLarge ? "col-span-2 row-span-2" : ""
              }`}
            >
              {card.postId && (
                <iframe
                  src={`https://www.instagram.com/p/${card.postId}/embed`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allowFullScreen={true}
                  className="w-full h-full"
                ></iframe>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedSection;
