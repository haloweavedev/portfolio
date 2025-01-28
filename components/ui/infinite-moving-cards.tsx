"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  image: string;
}

interface InfiniteMovingCardsProps {
  items: Project[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });
        getDirection();
        getSpeed();
        setStart(true);
      }
    };

    const getDirection = () => {
      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse"
        );
      }
    };

    const getSpeed = () => {
      if (containerRef.current) {
        const duration =
          speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
        containerRef.current.style.setProperty("--animation-duration", duration);
      }
    };

    addAnimation();
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((project) => (
          <li
            key={project.id}
            className="relative w-[600px] rounded-xl overflow-hidden flex-shrink-0"
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              width={600}
              height={400}
              className="object-cover object-center w-full h-full"
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
};