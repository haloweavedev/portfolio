"use client"

import { Button } from "./ui/button"
import { Sparkles } from "lucide-react"
import { FadeIn } from "./ui/fade-in"
import { motion } from "framer-motion"

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

function CategoryCard({ title, description, pattern, index }: { title: string; description: string; pattern: React.ReactNode; index: number }) {
  return (
    <FadeIn
      delay={0.2 + index * 0.1}
      fadeInDirection="none"
      className="group relative overflow-hidden rounded-xl backdrop-blur-[2px] border border-white/[0.08] p-8 transition-all duration-500 hover:bg-white/[0.04]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.3 + index * 0.1
        }}
      >
        {pattern}
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
        className="text-3xl font-instrument-serif italic mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:to-white/90 transition-all duration-500"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
        className="text-white/60 leading-relaxed group-hover:text-white/70 transition-colors duration-500"
      >
        {description}
      </motion.p>
    </FadeIn>
  )
}

export default function WhoIsItFor() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-instrument-serif italic mb-6">
            Who is it for?
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Our AI-driven design and development solutions cater to a broad spectrum of clients, but in our experience, most fall into these key categories.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              pattern={category.pattern}
              index={index}
            />
          ))}
        </div>

        <FadeIn 
          delay={0.6} 
          fadeInDirection="none"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => window.open("https://cal.com/haloweave/15min", "_blank")}
            className="group"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Book a Call
            </span>
            <Sparkles className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}