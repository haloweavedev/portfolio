"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const socials = [
  {
    name: "Email",
    icon: "/socials/mail.svg",
    href: "mailto:hello@haloweave.com",
  },
  {
    name: "X",
    icon: "/socials/x.svg",
    href: "https://x.com/haloweave",
  },
  {
    name: "Instagram",
    icon: "/socials/instagram.svg",
    href: "https://instagram.com/haloweave",
  },
  {
    name: "LinkedIn",
    icon: "/socials/linkedin.svg",
    href: "https://linkedin.com/company/haloweave",
  },
  {
    name: "Facebook",
    icon: "/socials/facebook.svg",
    href: "https://facebook.com/haloweave",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Footer() {
  return (
    <footer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
            <Link href="/" className="relative group">
              <Image
                src="/logo-horizontal.svg"
                alt="Haloweave Logo"
                width={108}
                height={33}
                className="transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-white/60 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                <Image
                  src={social.icon || "/placeholder.svg"}
                  alt={social.name}
                  width={33}
                  height={33}
                  className="footer-icon w-7 h-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end items-center gap-1 text-sm text-white/60"
          >
            <span>© {new Date().getFullYear()} Haloweave</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}