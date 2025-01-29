"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Sparkles } from "lucide-react"

const categories = [
  {
    title: "Founders",
    description:
      "Transform your vision into reality in just 14 days. From concept to launch, we deliver complete branding, design, and development solutions that set you apart.",
    pattern: (
      <svg className="w-8 h-8 mb-6 text-white/20" viewBox="0 0 24 24">
        <circle cx="4" cy="4" r="2" fill="currentColor" />
        <circle cx="12" cy="4" r="2" fill="currentColor" />
        <circle cx="20" cy="4" r="2" fill="currentColor" />
        <circle cx="4" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Start-ups",
    description:
      "Accelerate your growth with strategic development. We help clear your roadmap, ship new features, and optimize user flows for maximum impact.",
    pattern: (
      <svg className="w-8 h-8 mb-6 text-white/20" viewBox="0 0 24 24">
        <circle cx="4" cy="4" r="2" fill="currentColor" />
        <circle cx="12" cy="4" r="2" fill="currentColor" />
        <circle cx="20" cy="4" r="2" fill="currentColor" />
        <circle cx="4" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="20" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Agencies",
    description:
      "Never miss an opportunity. Our white-label development services help you handle overflow, maintain quality, and keep your clients delighted.",
    pattern: (
      <svg className="w-8 h-8 mb-6 text-white/20" viewBox="0 0 24 24">
        <circle cx="4" cy="4" r="2" fill="currentColor" />
        <circle cx="12" cy="4" r="2" fill="currentColor" />
        <circle cx="20" cy="4" r="2" fill="currentColor" />
        <circle cx="4" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="20" cy="12" r="2" fill="currentColor" />
        <circle cx="4" cy="20" r="2" fill="currentColor" />
        <circle cx="12" cy="20" r="2" fill="currentColor" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
    },
  },
}

export default function WhoIsItFor() {
  return (
    <section className="py-24 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-instrument-serif italic mb-6">Who is it for?</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
          Our AI-driven design and development solutions cater to a broad spectrum of clients, but in our experience, most fall into these key categories.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.08] p-8 transition-all duration-500 hover:bg-white/[0.04]"
            >
              {category.pattern}
              <h3 className="text-3xl font-instrument-serif italic mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:to-white/90 transition-all duration-500">
                {category.title}
              </h3>
              <p className="text-white/60 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button>
            Book a Call
            <Sparkles className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
