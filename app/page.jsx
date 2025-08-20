import Navbar from "@/app/components/navbar";
import CardSwap, { Card } from "@/app/components/hero";

export default function HomePage() {
  return (
    <>
      <div className="mx-10 border-r border-l py-6 border-b border-dashed border-neutral-400">
        <Navbar />
      </div>
      <div className="mx-10 border-r border-l py-6 border-b border-dashed border-neutral-400">
        <div className="flex">
          <div className="flex flex-col justify-center px-10">
            <div>
              <span className="px-4 py-2 text-xs rounded-full bg-black text-white uppercase">Introducing</span>
            </div>
            <h1 className="pt-8 text-5xl">Hack'O'Relay 4.0</h1>
            <p>
              Text to be added here
            </p>
            <div className="flex gap-2 items-center pt-10">
              <a href="#" className="bg-black text-white px-6 py-2 shadow-xl rounded-md">Join Now</a>
              <span className="border bg-white text-neutral-600 border-black shadow-xl rounded-md px-6 py-2">Deadline 27 August 2025</span>
            </div>
          </div>
          <div className="">
          <div style={{ width: "600px", height: "450px", position: "relative" }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={2500}
            pauseOnHover={false}
          >
            <Card imageSrc="/firebase.jpeg" />
            <Card imageSrc="/gemini.png"/>
            <Card imageSrc="/studio.png"/>
          </CardSwap>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
