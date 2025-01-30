"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./fade-in";

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

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
  delay: number;
}

function ProcessCard({ number, title, description, className, delay }: ProcessCardProps) {
  return (
    <FadeIn
      delay={delay}
      fadeInDirection="none"
      className={cn(
        "group relative w-full rounded-xl overflow-hidden",
        "backdrop-blur-sm",
        "border border-white/[0.03] hover:border-white/[0.08] transition-all duration-500",
        className
      )}
    >
      <div className="size-full bg-repeat bg-[length:500px_500px] bg-noise-pattern">
        <div className="relative p-6 md:p-8 backdrop-brightness-[1.02]">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 0.3,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: delay + 0.2
              }
            }}
            viewport={{ once: true }}
            className="absolute top-4 right-6 text-5xl font-instrument-serif italic text-white/30"
          >
            {number}
          </motion.span>

          <div className="relative z-20">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                  delay: delay + 0.3
                }
              }}
              viewport={{ once: true }}
              className="text-2xl font-instrument-serif italic mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:to-white/90 transition-all duration-500"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 0.6,
                transition: {
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                  delay: delay + 0.4
                }
              }}
              viewport={{ once: true }}
              className="text-white leading-relaxed group-hover:text-white/70 transition-colors duration-500"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="py-20 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16" delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-instrument-serif italic mb-6">
            How We Work
          </h2>

          <div className="flex items-center justify-center gap-6 flex-wrap md:flex-nowrap text-white/70">
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
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <motion.div 
            className="absolute hidden md:block top-1/2 left-[16.67%] right-[16.67%] h-px"
            initial={{ opacity: 0 }}
            animate={isInView ? {
              opacity: 1,
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
              transition: { 
                duration: 1.2,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.5 
              }
            } : {}}
          />

          {steps.map((step, index) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={0.3 + index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}