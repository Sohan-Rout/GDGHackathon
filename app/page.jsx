import Navbar from "@/app/components/navbar";
import CardSwap, { Card } from "@/app/components/hero";
import Prizes from "@/app/components/prizes";
import Tracks from "@/app/components/tracks";
import Judges from "@/app/components/judges";
import JoinSection from "@/app/components/join";
import Footer from "@/app/components/footer";
import { GoArrowUpRight } from "react-icons/go";

export default function HomePage() {
  return (
    <>
      <div className="md:mx-10 sm:mx-0 border-r border-l py-6 border-b border-dashed border-neutral-400">
        <Navbar />
      </div>

      <div className="md:mx-10 sm:mx-0 border-r border-l py-6 border-b border-dashed border-neutral-400">
        <div className="flex">
          <div className="flex flex-col justify-center px-10">
            <div>
              <span className="px-4 py-2 text-xs rounded-full bg-black text-white uppercase">Introducing</span>
            </div>
            <h1 className="pt-8 text-5xl text-black">Hack'O'Relay 4.0</h1>
            <p className="pt-4 text-lg text-neutral-500">
              Code. Create. Conquer.
            </p>
            <p className="text-lg text-neutral-500">
              DCE's Premier 36-Hour Innovation Challenge. 
            </p>
            <p className="text-lg text-neutral-500">
              A Hackathon for the Next Generation of Developers.
            </p>
            <div className="flex gap-2 items-center pt-10">
              <div className="flex items-center gap-2 bg-black hover:scale-105 duration-300 text-white px-6 py-2 shadow-xl rounded-md">
                <GoArrowUpRight className="text-lg"/>
                <a href="https://unstop.com/p/hack-o-relay-40-dronacharya-college-of-engineering-dce-gurgaon-1544646">Join Now</a>
              </div>
              <span className="border bg-white text-neutral-600 border-black shadow-xl rounded-md px-6 py-2">Deadline 27 August 2025</span>
            </div>
            <div className="flex gap-4 items-center mt-8">
              <span className="text-neutral-500">Powered By</span>
              <img src="./Unstop.png" className="grayscale" width={90}></img>
            </div>
          </div>
          <div className="">
            <div className="hidden sm:block">
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
        {/* Mobile CardSwap */}
        <div className="sm:hidden mt-6 flex justify-center">
          <div style={{ width: "5px", height: "225px", position: "relative" }}>
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

      <div className="md:mx-10 sm:mx-0  border-r border-l py-6 border-b border-dashed border-neutral-400">
        <Prizes/>
      </div>
      <div className="md:mx-10 sm:mx-0  border-r border-l py-6 border-b border-dashed border-neutral-400">
        <Tracks />
      </div>
      {/*
      <div className="md:mx-10 sm:mx-0  border-r border-l py-6 border-b border-dashed border-neutral-400">
        <Judges />
      </div>
      */}
      <div className="md:mx-10 sm:mx-0  border-r border-l py-6 border-b border-dashed border-neutral-400">
        <JoinSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
