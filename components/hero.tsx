"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5
    }
  }
};

export function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-screen items-center justify-center px-4 relative z-10"
    >
      <div className="max-w-4xl text-center">
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center rounded-[6px] border border-white/10 bg-white/5 px-3 py-1"
        >
          <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-white/70">Accepting New Projects</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-8 text-4xl font-light leading-[1.3] tracking-tight md:text-6xl lg:text-7xl font-instrument-serif italic"
        >
          <span className="block text-white">Your Vision, Our Precision.</span>
          <span className="block text-white/70">AI-Driven Web Development.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-12 text-lg text-white/70 md:text-xl"
        >
          At Haloweave, we merge cutting-edge AI with expert craftsmanship to deliver
          <br className="hidden md:block" />
          tailored web solutions—from design to deployment to maintenance. 
          <br className="hidden md:block" />
          Accelerate your success in today&apos;s digital-first world.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          <Button onClick={() => window.open("https://cal.com/haloweave/15min", "_blank")}>
            Book a Call
            <Sparkles className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}