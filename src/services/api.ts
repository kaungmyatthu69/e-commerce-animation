export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const BASE_URL = "https://fakestoreapi.com";

export const api = {
  getProducts: async (): Promise<Product[]> => {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  },

  getProduct: async (id: number): Promise<Product> => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  },

  getCategories: async (): Promise<string[]> => {
    const res = await fetch(`${BASE_URL}/products/categories`);
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const res = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!res.ok) throw new Error("Failed to fetch products by category");
    return res.json();
  },
};
