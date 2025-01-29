"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  projectName: string
  description: string
  techStack: string[]
}

const projects: Project[] = [
  {
    projectName: "Assistly",
    description:
      "Assistly is an AI voice assistant platform that can be tailored to your data for specialized customer support or receptionist tasks. Built with Gemini Flash 2.0, Whisper, and Next.js, it streamlines daily queries and scheduling. This solution boosts response efficiency, ensuring a seamless and professional customer experience.",
    techStack: ["gemini flash 2.0", "whisper", "nextjs"],
  },
  {
    projectName: "Workmate",
    description:
      "Workmate is a comprehensive AI tool that scans and organizes your entire email database, helping you create job trackers and AI-generated resumes. Leveraging Mail, GPT-4o-mini, and Next.js, it offers a chat-based interface to interact with your emails. Simplify your job application process while staying on top of important opportunities.",
    techStack: ["mail", "gpt-4o-mini", "nextjs"],
  },
  {
    projectName: "Minerva",
    description:
      "Minerva is a live RAG (Retrieval-Augmented Generation) chatbot that provides up-to-date insights from AAR&apos;s extensive blog—hosting 8GB of data and 3 million monthly visits. Developed with Pinecone, Langchain, and Next.js, it delivers accurate, real-time information. This ensures a seamless user experience backed by constantly refreshed content.",
    techStack: ["pinecone", "langchain", "nextjs"],
  },
  {
    projectName: "RocketPosting",
    description:
      "RocketPosting centralizes your social media management with features for scheduling, team collaboration, and AI-driven post creation. Powered by Pinecone, Langchain, and Next.js, it integrates multiple social platforms for effortless publishing. Whether you&apos;re posting now or planning ahead, rocketposting maximizes your brand&apos;s online impact.",
    techStack: ["pinecone", "langchain", "nextjs"],
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden bg-black/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Container to maintain aspect ratio */}
      <div className="relative w-full" style={{ paddingBottom: "64.375%" }}>
        {" "}
        {/* 832/1280 = 0.64375 */}
        <Image
          src={`/projects/${project.projectName.toLowerCase()}.png`}
          alt={project.projectName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-105 blur-sm brightness-50" : "scale-100"
          }`}
          priority
        />
        {/* Default state - project name with gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="absolute bottom-6 left-6 text-2xl font-instrument-serif italic">{project.projectName}</h3>
        </div>
        {/* Hover state content */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-8 flex flex-col justify-between bg-black/60 backdrop-blur-sm"
            >
              <div>
                <motion.h3
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="text-3xl font-instrument-serif italic mb-4"
                >
                  {project.projectName}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-white/80 leading-relaxed mb-6"
                >
                  {project.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-lg font-medium text-white/90 backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export const RecentWork = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-instrument-serif italic text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Recent Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.projectName} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}