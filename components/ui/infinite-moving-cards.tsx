"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Project {
  id: number
  image: string
}

interface InfiniteMovingCardsProps {
  items: Project[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children)
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true)
          scrollerRef.current?.appendChild(duplicatedItem)
        })
        getDirection()
        getSpeed()
        setStart(true)
      }
    }

    const getDirection = () => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse")
      }
    }

    const getSpeed = () => {
      if (containerRef.current) {
        const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
        containerRef.current.style.setProperty("--animation-duration", duration)
      }
    }

    addAnimation()
  }, [direction, speed])

  const cardWidth = isMobile ? "65vw" : "600px" // Reduced from 80vw to 65vw for mobile
  const cardHeight = isMobile ? "42.25vw" : "390px" // Maintains the same aspect ratio (65 * 0.65 = 42.25)

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((project) => (
          <li
            key={project.id}
            className="relative rounded-xl overflow-hidden flex-shrink-0"
            style={{
              width: cardWidth,
              height: cardHeight,
            }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`Project ${project.id}`}
              fill
              sizes={`(max-width: 768px) ${cardWidth}, 600px`}
              className="object-cover object-center"
              priority
            />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}