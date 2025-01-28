"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const projects = [
  { id: 1, image: "/projects/Assistly.png" },
  { id: 2, image: "/projects/Workmate.png" },
  { id: 3, image: "/projects/SenateInsights.png" },
  { id: 4, image: "/projects/JourneyofCompassion.png" },
  { id: 5, image: "/projects/Aicompass.png" },
  { id: 6, image: "/projects/Studionaadi.png" },
  { id: 7, image: "/projects/BespokeAstrology.png" },
  { id: 8, image: "/projects/Minerva.png" },
];

export function WorkSection() {
  return (
    <section className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="mb-16 flex items-center gap-4 justify-center"
      >
        <p className="text-2xl text-white/90 font-homemade-apple">
          Some  of  our  recent  work!
        </p>
        <motion.img
          src="/arrow-2.svg"
          alt="Arrow"
          className="w-12 h-12 mt-6"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        />
      </motion.div>

      <div className="relative">
        {/* Gradient overlay */}
        <div className="absolute pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="relative z-10"
        >
          <InfiniteMovingCards items={projects} direction="right" speed="slow" />
        </motion.div>
      </div>
    </section>
  );
}