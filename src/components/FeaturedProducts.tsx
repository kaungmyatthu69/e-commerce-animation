"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { FEATURED_PRODUCTS } from "@/constants/products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Drops</h2>
            <p className="text-muted-foreground">Curated styles for the season.</p>
          </div>
          <Link
            href="/shop"
            className="hidden md:block text-sm font-medium border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
          >
            View All Products
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURED_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div
                className={`aspect-[3/4] rounded-xl mb-4 overflow-hidden relative ${product.color}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: parseFloat(product.price.replace("$", "")),
                      category: product.category,
                      image: product.image,
                    });
                  }}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                  aria-label="Add to cart"
                >
                  <Plus className="w-5 h-5 text-black dark:text-white" />
                </button>
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
              <p className="font-semibold">{product.price}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/shop"
            className="inline-block text-sm font-medium border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
