"use client";

import { motion } from "framer-motion";

const TRENDING_ITEMS = [
  "New Arrivals",
  "•",
  "Best Sellers",
  "•",
  "Limited Edition",
  "•",
  "Free Shipping",
  "•",
  "Summer Collection",
  "•",
  "Premium Quality",
  "•",
];

export default function Trending() {
  return (
    <div className="py-12 border-y border-border bg-secondary/30 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap mask-image-linear-gradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-8 items-center"
        >
          {/* Duplicate list multiple times to ensure smooth infinite scroll */}
          {[...TRENDING_ITEMS, ...TRENDING_ITEMS, ...TRENDING_ITEMS, ...TRENDING_ITEMS].map((item, index) => (
            <span
              key={index}
              className="text-xl md:text-3xl font-bold uppercase tracking-widest text-foreground/80 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
