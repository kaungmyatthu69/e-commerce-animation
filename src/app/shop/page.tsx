"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { Product, ProductFilters } from "@/types/api";
import type { FilterState, SortOption } from "@/types/shop";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/shop/ProductCard";
import ProductSkeleton from "@/components/shop/ProductSkeleton";
import ShopFilters from "@/components/shop/ShopFilters";
import { useState, useMemo } from "react";

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>({
    title: "",
    categoryId: null,
    price_min: "",
    price_max: "",
  });

  const [sort, setSort] = useState<SortOption>("default");

  // Construct API filters
  const apiFilters: ProductFilters = useMemo(() => {
    return {
      title: filters.title || undefined,
      categoryId: filters.categoryId || undefined,
      price_min: filters.price_min === "" ? undefined : filters.price_min,
      price_max: filters.price_max === "" ? undefined : filters.price_max,
      offset: 0,
      limit: 50, // Increase limit to allow for better client-side sorting/filtering experience
    };
  }, [filters]);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", apiFilters],
    queryFn: () => api.getProducts(apiFilters),
  });

  // Client-side sorting
  const sortedProducts = useMemo(() => {
    if (!products) return [];
    const items = [...products];

    switch (sort) {
      case "price-asc":
        return items.sort((a, b) => a.price - b.price);
      case "price-desc":
        return items.sort((a, b) => b.price - a.price);
      case "name-asc":
        return items.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return items;
    }
  }, [products, sort]);

  return (
    <div className="min-h-screen font-sans bg-background">
      <header className="bg-secondary/20 py-12 mb-8">
        <div className="container px-4 mx-auto text-center">
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
            Discover our curated selection of premium products.
          </motion.p>
        </div>
      </header>

      <div className="container px-4 mx-auto pb-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-2">
              <ShopFilters
                filters={filters}
                setFilters={setFilters}
                sort={sort}
                setSort={setSort}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </div>
            ) : isError ? (
              <div className="h-64 flex flex-col items-center justify-center text-destructive text-center">
                <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
                <p className="text-muted-foreground">
                  Failed to load products. Please try again later.
                </p>
              </div>
            ) : sortedProducts.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                <p className="text-xl font-medium mb-2">No products found</p>
                <p className="text-muted-foreground">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      title: "",
                      categoryId: null,
                      price_min: "",
                      price_max: "",
                    })
                  }
                  className="mt-4 text-primary underline hover:opacity-80"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product: Product, index: number) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
