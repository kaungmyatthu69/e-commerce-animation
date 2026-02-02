"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="container px-4 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Stay in the loop
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Subscribe to our newsletter for exclusive drops, style tips, and
            insider discounts.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-background text-foreground font-bold rounded-full inline-flex items-center justify-center gap-2 hover:bg-background/90 transition-colors"
            >
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>

          <p className="text-xs text-primary-foreground/60 mt-6">
            By subscribing, you agree to our Terms & Conditions and Privacy Policy.
          </p>
        </motion.div>
      </div>

      {/* Background Decor */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[150%] bg-white/5 rounded-full blur-[120px] rotate-12" />
        <div className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[150%] bg-white/5 rounded-full blur-[120px] -rotate-12" />
      </motion.div>
    </section>
  );
}
