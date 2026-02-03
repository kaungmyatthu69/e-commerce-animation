"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import type { Product } from "@/types/api";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  // Helper to ensure we have a valid image URL
  const imageUrl =
    product.images.length > 0
      ? product.images[0].replace(/^["[]+|["\]]+$/g, "") // Basic cleanup for malformed API data
      : "https://placehold.co/400x400?text=No+Image";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group border border-border rounded-2xl p-4 bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-[3/4] rounded-xl overflow-hidden mb-5 bg-white p-0 relative flex items-center justify-center w-full">
        <Image
          src={imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            addItem({
              id: product.id,
              name: product.title,
              price: product.price,
              category: product.category.name,
              image: imageUrl,
            });
          }}
          className="absolute bottom-4 right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-primary/90 z-10"
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
            {product.category.name}
          </p>
        </div>

        <h3
          className="font-bold text-lg leading-tight mb-3 line-clamp-2 min-h-[3rem]"
          title={product.title}
        >
          {product.title}
        </h3>

        <div className="mt-auto flex items-end justify-between">
          <span className="font-bold text-2xl tracking-tight">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
