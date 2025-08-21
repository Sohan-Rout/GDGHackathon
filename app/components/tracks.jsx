import SpotlightCard from "./spotlight-card";

const tracks = [
  { title: "AI & ML", description: "Innovate with artificial intelligence and machine learning.", imageSrc: "/images/ai-ml.jpg" },
  { title: "Blockchain", description: "Explore decentralized technologies and applications.", imageSrc: "/images/blockchain.jpg" },
  { title: "Cybersecurity", description: "Secure systems and protect data from threats.", imageSrc: "/images/cybersecurity.jpg" },
  { title: "Web Development", description: "Build modern, scalable web applications.", imageSrc: "/images/web-development.jpg" },
  { title: "Mobile Development", description: "Create cutting-edge mobile apps.", imageSrc: "/images/mobile-development.jpg" },
  { title: "IoT", description: "Connect devices and build smart solutions.", imageSrc: "/images/iot.jpg" },
  { title: "Game Development", description: "Design immersive gaming experiences.", imageSrc: "/images/game-development.jpg" },
  { title: "Cloud Computing", description: "Leverage cloud platforms for scalable solutions.", imageSrc: "/images/cloud-computing.jpg" },
  { title: "Data Science", description: "Analyze and visualize data to uncover insights.", imageSrc: "/images/data-science.jpg" },
];

export default function Tracks() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">Hackathon Tracks</h2>
        <p className="mt-2 text-sm text-gray-600">Explore diverse tracks to innovate and create.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <SpotlightCard key={index} className="hover:scale-105 transition-transform duration-300">
            <img src={track.imageSrc} alt={track.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-white">{track.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{track.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}