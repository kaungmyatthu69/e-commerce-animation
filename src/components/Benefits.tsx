"use client";

import { motion, Variants } from "framer-motion";
import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const BENEFITS = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $50",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% secure payment",
  },
  {
    icon: RefreshCw,
    title: "30 Days Return",
    description: "Simply return it within 30 days",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Customer support whenever you need",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Benefits() {
  return (
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-background hover:shadow-sm transition-colors duration-300"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
