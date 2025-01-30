'use client';

import { motion } from "framer-motion";
import { FadeIn } from "./ui/fade-in";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <div className="py-32">
      <FadeIn 
        className="max-w-4xl mx-auto px-4 text-center"
        fadeInDirection="none"
        delay={0.2}
      >

        {/* Testimonial Text */}
        <motion.blockquote 
          initial={{ opacity: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ 
            opacity: { duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.4 },
            filter: { duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: 0.4 }
          }}
          className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-8 md:mb-10"
        >
          &quot;I am immensely grateful for my website team. Their responsiveness, intelligence, and dedication have played a pivotal role in ensuring that my website remains technologically relevant. With their expertise and support, we have not only kept pace with advancements but also stayed ahead of the curve. Their invaluable contributions have been instrumental in our online success, and I couldn&apos;t be more appreciative of their efforts.&quot;
        </motion.blockquote>

        {/* Author Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            y: { type: "spring", stiffness: 200, damping: 20, delay: 0.5 },
            opacity: { duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.5 },
            filter: { duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: 0.5 }
          }}
          className="flex items-center justify-center gap-4"
        >
          {/* Author Image */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/5 ring-2 ring-white/10 transition-all duration-300 hover:ring-white/20">
            <Image
              src="/dabney-g.png"
              alt="Dabney G"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>

          {/* Author Info */}
          <div className="text-left">
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-base md:text-lg text-white/90 font-medium leading-tight"
            >
              Dabney G
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="text-sm md:text-base text-white/50"
            >
              AAR
            </motion.p>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  );
}