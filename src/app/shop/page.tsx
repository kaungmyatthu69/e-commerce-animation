"use client";

import { useQuery } from "@tanstack/react-query";
import { api, type Product } from "@/services/api";
import { useCart } from "@/hooks/useCart";
import { Loader2, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function ShopPage() {
  const { addItem } = useCart();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: api.getProducts,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-destructive px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-muted-foreground">
          Failed to load products. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-12 font-sans bg-background">
      <header className="mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          Shop Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          Discover our curated selection of premium products, designed for the modern
          lifestyle.
        </motion.p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products?.map((product: Product, index: number) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group border border-border rounded-2xl p-4 bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-5 bg-white p-8 relative flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    category: product.category,
                    image: product.image,
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
                  {product.category}
                </p>
                <div className="flex items-center gap-1 text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                  <span>★</span>
                  <span>{product.rating.rate}</span>
                </div>
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
        ))}
      </main>
    </div>
  );
}
