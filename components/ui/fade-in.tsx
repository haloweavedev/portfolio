"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  fadeInDirection?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  viewTriggerOffset?: number;
  withBlur?: boolean;
}

export const FadeIn = ({
  children,
  className,
  fadeInDirection = "up",
  delay = 0,
  viewTriggerOffset = 0.2,
  withBlur = true,
  ...props
}: FadeInProps) => {
  const directions = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: { x: 0, y: 0 },
  };

  const initialDirection = directions[fadeInDirection];

  return (
    <motion.div
      className={cn(className)}
      initial={{ 
        opacity: 0, 
        filter: withBlur ? "blur(5px)" : "none",
        ...initialDirection 
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
        transition: {
          opacity: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
          filter: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
          x: { type: "spring", damping: 30, stiffness: 200 },
          y: { type: "spring", damping: 30, stiffness: 200 },
          delay,
        },
      }}
      viewport={{ 
        once: true, 
        margin: `${viewTriggerOffset}px`,
        amount: 0.3 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};