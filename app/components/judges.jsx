"use client"
import TiltedCard from "./tilted-card";

const judgesDay1 = [
  { name: "Judge 1", imageSrc: "/images/judge1.jpg", caption: "Expert in AI & ML" },
  { name: "Judge 2", imageSrc: "/images/judge2.jpg", caption: "Blockchain Specialist" },
  { name: "Judge 3", imageSrc: "/images/judge3.jpg", caption: "Cybersecurity Guru" },
  { name: "Judge 4", imageSrc: "/images/judge4.jpg", caption: "Web Development Pro" },
  { name: "Judge 5", imageSrc: "/images/judge5.jpg", caption: "Mobile App Innovator" },
  { name: "Judge 6", imageSrc: "/images/judge6.jpg", caption: "IoT Visionary" },
  { name: "Judge 7", imageSrc: "/images/judge7.jpg", caption: "Game Development Expert" },
  { name: "Judge 8", imageSrc: "/images/judge8.jpg", caption: "Cloud Computing Leader" },
  { name: "Judge 9", imageSrc: "/images/judge9.jpg", caption: "Data Science Analyst" },
];

const judgesDay2 = [
  { name: "Judge 10", imageSrc: "/images/judge10.jpg", caption: "AI Innovator" },
  { name: "Judge 11", imageSrc: "/images/judge11.jpg", caption: "Blockchain Pioneer" },
  { name: "Judge 12", imageSrc: "/images/judge12.jpg", caption: "Cybersecurity Strategist" },
  { name: "Judge 13", imageSrc: "/images/judge13.jpg", caption: "Web Design Specialist" },
  { name: "Judge 14", imageSrc: "/images/judge14.jpg", caption: "Mobile App Developer" },
  { name: "Judge 15", imageSrc: "/images/judge15.jpg", caption: "IoT Innovator" },
  { name: "Judge 16", imageSrc: "/images/judge16.jpg", caption: "Game Design Expert" },
  { name: "Judge 17", imageSrc: "/images/judge17.jpg", caption: "Cloud Architect" },
  { name: "Judge 18", imageSrc: "/images/judge18.jpg", caption: "Data Scientist" },
];

export default function JudgesSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      {/* Day 1 Judges */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">Day 1 Judges</h2>
        <p className="mt-2 text-sm text-gray-600">Meet the experts judging Day 1 of the hackathon.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {judgesDay1.map((judge, index) => (
          <TiltedCard
            key={index}
            imageSrc={judge.imageSrc}
            altText={judge.name}
            captionText={judge.caption}
            containerHeight="300px"
            containerWidth="100%"
            imageHeight="300px"
            imageWidth="300px"
          />
        ))}
      </div>

      {/* Day 2 Judges */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">Day 2 Judges</h2>
        <p className="mt-2 text-sm text-gray-600">Meet the experts judging Day 2 of the hackathon.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {judgesDay2.map((judge, index) => (
          <TiltedCard
            key={index}
            imageSrc={judge.imageSrc}
            altText={judge.name}
            captionText={judge.caption}
            containerHeight="300px"
            containerWidth="100%"
            imageHeight="300px"
            imageWidth="300px"
          />
        ))}
      </div>
    </section>
  );
}