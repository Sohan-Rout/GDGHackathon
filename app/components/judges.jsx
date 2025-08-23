"use client";
import { useState } from "react";
import { UserStar } from "lucide-react";

const judgesDay1 = [
  {
    name: "Judge 1",
    imageSrc: "/images/judge1.jpg",
    caption: "Expert in AI & ML",
  },
  {
    name: "Judge 2",
    imageSrc: "/images/judge2.jpg",
    caption: "Blockchain Specialist",
  },
  {
    name: "Judge 3",
    imageSrc: "/images/judge3.jpg",
    caption: "Cybersecurity Guru",
  },
  {
    name: "Judge 4",
    imageSrc: "/images/judge4.jpg",
    caption: "Web Development Pro",
  },
  {
    name: "Judge 5",
    imageSrc: "/images/judge5.jpg",
    caption: "Mobile App Innovator",
  },
  { name: "Judge 6", imageSrc: "/images/judge6.jpg", caption: "IoT Visionary" },
  {
    name: "Judge 7",
    imageSrc: "/images/judge7.jpg",
    caption: "Game Development Expert",
  },
  {
    name: "Judge 8",
    imageSrc: "/images/judge8.jpg",
    caption: "Cloud Computing Leader",
  },
  {
    name: "Judge 9",
    imageSrc: "/images/judge9.jpg",
    caption: "Data Science Analyst",
  },
];

const judgesDay2 = [
  {
    name: "Judge 10",
    imageSrc: "/images/judge10.jpg",
    caption: "AI Innovator",
  },
  {
    name: "Judge 11",
    imageSrc: "/images/judge11.jpg",
    caption: "Blockchain Pioneer",
  },
  {
    name: "Judge 12",
    imageSrc: "/images/judge12.jpg",
    caption: "Cybersecurity Strategist",
  },
  {
    name: "Judge 13",
    imageSrc: "/images/judge13.jpg",
    caption: "Web Design Specialist",
  },
  {
    name: "Judge 14",
    imageSrc: "/images/judge14.jpg",
    caption: "Mobile App Developer",
  },
  {
    name: "Judge 15",
    imageSrc: "/images/judge15.jpg",
    caption: "IoT Innovator",
  },
  {
    name: "Judge 16",
    imageSrc: "/images/judge16.jpg",
    caption: "Game Design Expert",
  },
  {
    name: "Judge 17",
    imageSrc: "/images/judge17.jpg",
    caption: "Cloud Architect",
  },
  {
    name: "Judge 18",
    imageSrc: "/images/judge18.jpg",
    caption: "Data Scientist",
  },
];

export default function JudgesSection() {
  const [activeDay, setActiveDay] = useState("day1");

  const judges = activeDay === "day1" ? judgesDay1 : judgesDay2;

  return (
    <section>
      <div className="flex flex-col items-center py-4">
        <div className="flex gap-2 items-center bg-white border border-black rounded-full text-black px-4 py-2">
          <UserStar />
          <h1 className="uppercase text-xl">Judges</h1>
        </div>
        <span className="py-2 text-neutral-600 text-lg">
          Meet the Jury of Innovation
        </span>
      </div>

      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex rounded-full border border-gray-400 overflow-hidden">
          <button
            onClick={() => setActiveDay("day1")}
            className={`px-6 py-2 text-sm font-medium transition-colors ${
              activeDay === "day1"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Day 1
          </button>
          <button
            onClick={() => setActiveDay("day2")}
            className={`px-6 py-2 text-sm font-medium transition-colors ${
              activeDay === "day2"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Day 2
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {judges.map((j, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col"
          >
            <img
              src={j.imageSrc}
              alt={j.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-semibold text-lg mt-3">{j.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {j.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
