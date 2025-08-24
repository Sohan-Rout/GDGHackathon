"use client";
import { motion } from "framer-motion";
import { LiaAwardSolid } from "react-icons/lia";
import { GiTrophy } from "react-icons/gi";
import { PiMedalFill } from "react-icons/pi";

const prizeVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 100 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const prizeObjects = [
  {
    type: "Winner",
    amount: "Rs 8,000",
    color: "text-amber-500",
  },
  {
    type: "First Runner Up",
    amount: "Rs 5,000",
    color: "text-gray-500",
  },
  {
    type: "Second Runner Up",
    amount: "Rs 3,000",
    color: "text-orange-950",
  },
];

const Prizes = () => {
  return (
    <section className="py-12 w-full flex flex-col items-center py-16">
      <div className="flex bg-white mt-10 justify-center mb-4 font-mono shadow-xl border-black rounded-full border items-center px-6 py-2">
        <LiaAwardSolid className="text-2xl" />
        <h2 className="text-xl uppercase">Prizes</h2>
      </div>
      <div className="pb-10">
        <p className="text-neutral-700 text-lg">
          Join 100+ participants in the ultimate showdown
        </p>
      </div>
      
      {/* Main container with responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left side - Prize Pool */}
        <motion.div
          className="flex flex-col items-center justify-center bg-black text-white font-bold text-2xl rounded-lg shadow-xl py-12 px-8 min-h-[300px]"
          variants={prizeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <span className="text-3xl md:text-4xl font-medium mb-6">Prize Pool</span>
          <div className="flex flex-col justify-center items-center">
            <span>
              <GiTrophy className="text-6xl md:text-8xl" />
            </span>
            <span className="pt-4 text-blue-500 text-xl md:text-2xl">Rs. 16,000</span>
          </div>
        </motion.div>

        {/* Right side - Winner + Runner Ups stacked */}
        <div className="flex flex-col gap-4 justify-center">
          {prizeObjects.map((objects, i) => (
            <motion.div
              key={i}
              className="h-16 md:h-20 flex items-center px-6 md:px-8 justify-between rounded-lg bg-white border text-black shadow-xl"
              variants={prizeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i + 1}
            >
              <div className="flex gap-2 items-center">
                <div className={`${objects.color}`}>
                  <PiMedalFill className="text-xl md:text-2xl" />
                </div>
                <div className="text-sm md:text-base font-medium">{objects.type}</div>
              </div>
              <div className="text-sm md:text-base font-semibold">{objects.amount}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;