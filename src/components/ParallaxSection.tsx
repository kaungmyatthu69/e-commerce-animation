"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  index: number;
}

export default function ParallaxSection({
  children,
  className,
  index,
}: ParallaxSectionProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Scale starts at 0.9 and goes to 1 as it scrolls into full view
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div
      ref={container}
      className="sticky h-screen flex items-center justify-center p-4 sm:p-8"
      style={{ top: `${index * 30}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className={cn(
          "relative flex flex-col w-full max-w-5xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-border origin-top bg-card text-card-foreground",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}
