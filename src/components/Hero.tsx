"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background text-foreground">
      <div className="container px-4 mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
          >
            New Collection 2025
          </motion.span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {Array.from("Elevate Your Style").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-muted-foreground"
          >
            with Timeless Essentials
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Discover our handpicked selection of premium clothing and accessories
          designed for the modern lifestyle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-full transition-all hover:bg-primary/90 hover:scale-105"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Background Gradient Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  );
}
