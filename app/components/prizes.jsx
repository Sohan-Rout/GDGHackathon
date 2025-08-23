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
    <section className="w-full flex flex-col items-center py-16">
      <div className="flex bg-white mt-10 justify-center mb-4 font-mono shadow-xl border-black rounded-full border items-center px-6 py-2">
        <LiaAwardSolid className="text-2xl" />
        <h2 className="text-xl uppercase">Prizes</h2>
      </div>
      <div className="pb-10">
        <p className="text-neutral-700 text-lg">
          Join 100+ participants in the ultimate showdown
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
        {/* Left side - Prize Pool */}
        <motion.div
          className="flex flex-col items-center justify-center bg-black text-white font-bold text-2xl rounded-lg shadow-xl"
          variants={prizeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <span className="py-6 text-4xl font-medium">Prize Pool</span>
          <div className="flex flex-col justify-center items-center">
            <span>
              <GiTrophy className="text-8xl" />
            </span>
            <span className="pt-2 text-blue-500">Rs. 16,000</span>
          </div>
        </motion.div>

        {/* Right side - Winner + Runner Ups */}
        <div className="flex flex-col gap-6">
          {prizeObjects.map((objects, i) => (
            <motion.div
              key={i}
              className="h-20 flex items-center px-8 justify-between rounded-lg bg-white border text-black shadow-xl"
              variants={prizeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i + 1}
            >
              <div className="flex gap-2">
                <div className={`${objects.color}`}>
                  <PiMedalFill className="text-2xl" />
                </div>
                <div>{objects.type}</div>
              </div>
              <div>{objects.amount}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
