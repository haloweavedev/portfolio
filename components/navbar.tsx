"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" }
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  // Transform values for background color and border
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.05)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center"
    >
      <div className="w-[95%] max-w-[1120px]">
        <motion.div
          className="rounded-xl px-6 py-4 transition-all duration-300"
          style={{
            backgroundColor,
            backdropFilter: hasScrolled ? "blur(8px)" : "none",
            WebkitBackdropFilter: hasScrolled ? "blur(8px)" : "none",
            borderColor,
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="relative group">
                <Image
                  src="/logo-horizontal.svg"
                  alt="Haloweave Logo"
                  width={108}
                  height={33}
                  priority
                  className="transition-opacity duration-300 group-hover:opacity-80"
                />
              </Link>
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
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.4 + i * 0.1,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-300"
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
              <Button
                className="group"
                onClick={() => window.open("https://cal.com/haloweave/15min", "_blank")}
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Book a Call
                </span>
                <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}