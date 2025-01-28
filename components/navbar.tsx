"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" }
];

const SCROLL_THRESHOLD = 100;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerWidth = useTransform(scrollY, [0, SCROLL_THRESHOLD], ["95%", "90%"]);
  const backdropBlur = useTransform(scrollY, [0, SCROLL_THRESHOLD], [12, 16]);
  const borderOpacity = useTransform(scrollY, [0, SCROLL_THRESHOLD], [0, 0.1]);
  const backgroundOpacity = useTransform(scrollY, [0, SCROLL_THRESHOLD], [0.4, 0.6]);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
        }
      }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center"
    >
      <motion.div 
        style={{ width: headerWidth }}
        className="max-w-[1120px]"
      >
        <motion.div 
          style={{
            backdropFilter: `blur(${backdropBlur}px)`,
            WebkitBackdropFilter: `blur(${backdropBlur}px)`,
            backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
            borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
          }}
          className={`rounded-xl px-6 py-4 transition-all duration-200 border ${
            isScrolled ? 'border-white/10' : 'border-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold"
            >
              <Image
                src="/logo-horizontal.svg"
                alt="Haloweave Logo"
                width={108}
                height={33}
                priority
              />
            </motion.div>

            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block"
            >
              <ul className="flex items-center space-x-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="group">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Book a Call
                </span>
                <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}