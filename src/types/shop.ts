export interface FilterState {
  title: string;
  categoryId: number | null;
  price_min: number | "";
  price_max: number | "";
}

export type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";
