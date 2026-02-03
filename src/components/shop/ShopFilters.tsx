"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { Category } from "@/types/api";
import type { FilterState, SortOption } from "@/types/shop";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState, useEffect } from "react";


export type { FilterState, SortOption };

interface ShopFiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  sort: SortOption;
  setSort: (sort: SortOption) => void;
}

export default function ShopFilters({
  filters,
  setFilters,
  sort,
  setSort,
}: ShopFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(filters.title);

  // Debounce search updates
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (filters.title !== localSearch) {
        setFilters({ ...filters, title: localSearch });
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [localSearch, filters, setFilters]);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  const handleCategoryChange = (categoryId: number | null) => {
    setFilters({ ...filters, categoryId });
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "price_min" | "price_max",
  ) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setFilters({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    setLocalSearch("");
    setFilters({
      title: "",
      categoryId: null,
      price_min: "",
      price_max: "",
    });
    setSort("default");
  };

  return (
    <div className="space-y-6">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex justify-between items-center">
        <div className="relative flex-1 mr-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={localSearch}
            onChange={handleSearchChange}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background focus:ring- focus:ring-primary/20 outline-none"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop & Mobile Drawer Content */}
      <div className={`space-y-8 ${isOpen ? "block" : "hidden md:block"}`}>
        {/* Search (Desktop) */}
        <div className="hidden md:block relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={localSearch}
            onChange={handleSearchChange}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                filters.categoryId === null
                  ? "bg-primary text-primary-foreground font-medium"
                  : "hover:bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              All Categories
            </button>
            {categories?.map((category: Category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  filters.categoryId === category.id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Price Range</h3>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="Min"
              value={filters.price_min}
              onChange={(e) => handlePriceChange(e, "price_min")}
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm outline-none focus:border-primary"
            />
            <span className="text-muted-foreground">-</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.price_max}
              onChange={(e) => handlePriceChange(e, "price_max")}
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Sorting */}
        <div>
          <h3 className="font-semibold mb-3">Sort By</h3>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm outline-none focus:border-primary cursor-pointer"
          >
            <option value="default">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearFilters}
          className="w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-destructive transition-colors border border-border rounded-md hover:border-destructive/50"
        >
          <X className="w-4 h-4" />
          Clear Filters
        </button>
      </div>
    </div>
  );
}
