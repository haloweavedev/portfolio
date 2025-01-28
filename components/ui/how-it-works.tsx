"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Schedule a complimentary strategy session where we'll dive deep into your vision and explore how our expertise can transform your digital presence.",
  },
  {
    number: "02",
    title: "Strategic Blueprint",
    description:
      "Receive a comprehensive prototype and detailed technical roadmap, carefully crafted to align with your business objectives and ensure crystal-clear execution.",
  },
  {
    number: "03",
    title: "Rapid Development",
    description:
      "Watch your vision come to life through our agile 4-week sprint process, with consistent updates and a production-ready solution that exceeds expectations.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

function ProcessCard({ number, title, description, className }: ProcessCardProps) {
  return (
    <motion.div
      variants={item}
      className={cn(
        "group relative w-full rounded-xl overflow-hidden",
        // ↓ Updated here from bg-black/20 to bg-black/10
        "backdrop-blur-sm",
        "border border-white/[0.03] hover:border-white/[0.08] transition-all duration-500",
        className
      )}
    >
      {/* Main container with noise pattern */}
      <div className="size-full bg-repeat bg-[length:500px_500px] bg-noise-pattern">
        <div className="relative p-6 md:p-8 backdrop-brightness-[1.02]">
          {/* Number now positioned relative to content area */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="absolute top-4 right-6 text-5xl font-instrument-serif italic text-white/30"
          >
            {number}
          </motion.span>

          <div className="relative z-20">
            <h3 className="text-2xl font-instrument-serif italic mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:to-white/90 transition-all duration-500">
              {title}
            </h3>
            <p className="text-white/60 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-instrument-serif italic mb-6"
          >
            How We Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 flex-wrap md:flex-nowrap"
          >
            <span className="flex items-center group">
              <img
                src="/globe.svg"
                alt="Global"
                className="w-4 h-4 mr-2 opacity-40 group-hover:opacity-60 transition-opacity"
              />
              Worldwide Service
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="flex items-center group">
              <img
                src="/window.svg"
                alt="Updates"
                className="w-4 h-4 mr-2 opacity-40 group-hover:opacity-60 transition-opacity"
              />
              Weekly Updates
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="flex items-center group">
              <img
                src="/file.svg"
                alt="Documentation"
                className="w-4 h-4 mr-2 opacity-40 group-hover:opacity-60 transition-opacity"
              />
              Full Documentation
            </span>
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Animated gradient line connecting cards */}
          <div className="absolute hidden md:block top-1/2 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {steps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}