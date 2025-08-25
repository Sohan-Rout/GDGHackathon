import { FaBoxArchive } from "react-icons/fa6";

export default function JoinSection() {
  return (
    <section className="py-12 relative mx-6 bg-white text-center text-black rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-40">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg"></div>
        ))}
      </div>
      <div className="relative z-10">
        <div className="flex justify-center my-2">
            <div className="flex items-center gap-2 bg-white px-4 py-1 border border-black rounded-full">
            <FaBoxArchive />
            <span className="uppercase">Get Started</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join the Hackathon?</h2>
        <p className="text-sm text-neutral-600 mx-4 mb-8 max-w-xl">
          Showcase your skills, collaborate with innovators, and build something amazing.
          Don’t miss the chance to be part of this incredible journey!
        </p>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://forms.gle/ytyKBTuh1VU5kt5H8"
            className="px-6 py-3 bg-black text-white rounded-full shadow-md hover:scale-105 transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}