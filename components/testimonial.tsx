'use client';

import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <div className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-4 text-center"
      >
        {/* Testimonial Text */}
        <motion.blockquote 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[14px] text-white/60 font-light leading-relaxed mb-6"
        >
          &quot;I am immensely grateful for my website team. Their responsiveness, intelligence, and dedication have played a pivotal role in ensuring that my website remains technologically relevant. With their expertise and support, we have not only kept pace with advancements but also stayed ahead of the curve. Their invaluable contributions have been instrumental in our online success, and I couldn&apos;t be more appreciative of their efforts.&quot;
        </motion.blockquote>

        {/* Author Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          {/* Author Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5">
            <img
              src="/dabney-g.png"
              alt="Dean Koštomaj"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Author Info */}
          <div className="text-left">
            <h4 className="text-[14px] text-white font-medium leading-tight">Dabney G - AAR</h4>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}