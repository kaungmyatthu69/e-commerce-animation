"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    id: 1,
    name: "Streetwear",
    itemCount: "120+ Items",
    color: "bg-orange-100 dark:bg-orange-900/20",
    cols: "md:col-span-2",
  },
  {
    id: 2,
    name: "Formal",
    itemCount: "85+ Items",
    color: "bg-blue-100 dark:bg-blue-900/20",
    cols: "md:col-span-1",
  },
  {
    id: 3,
    name: "Accessories",
    itemCount: "45+ Items",
    color: "bg-purple-100 dark:bg-purple-900/20",
    cols: "md:col-span-1",
  },
  {
    id: 4,
    name: "Footwear",
    itemCount: "60+ Items",
    color: "bg-green-100 dark:bg-green-900/20",
    cols: "md:col-span-2",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collections tailored for every occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${category.cols} relative group overflow-hidden rounded-2xl cursor-pointer h-[300px] ${category.color}`}
            >
              <Link href="/shop" className="absolute inset-0 z-10">
                <span className="sr-only">View {category.name}</span>
              </Link>

              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 transition-transform duration-300 group-hover:translate-y-[-8px]">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground/80">
                      {category.itemCount}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Hover Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
