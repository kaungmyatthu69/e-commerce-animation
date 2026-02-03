import axiosInstance from "./axiosConfig";
import type {
  Product,
  ProductFilters,
  Category,
  LoginRequest,
  LoginResponse,
  UserProfile,
} from "@/types/api";

export const api = {
  getProducts: async (filters: ProductFilters = {}): Promise<Product[]> => {
    const params: Record<string, any> = {
      offset: filters.offset ?? 0,
      limit: filters.limit ?? 20,
    };

    if (filters.title) params.title = filters.title;
    if (filters.price_min) params.price_min = filters.price_min;
    if (filters.price_max) params.price_max = filters.price_max;
    if (filters.categoryId) params.categoryId = filters.categoryId;

    const { data } = await axiosInstance.get<Product[]>("/products", {
      params,
    });
    return data;
  },

  getProduct: async (id: number): Promise<Product> => {
    const { data } = await axiosInstance.get<Product>(`/products/${id}`);
    return data;
  },

  getCategories: async (): Promise<Category[]> => {
    const { data } = await axiosInstance.get<Category[]>("/categories");
    return data;
  },

  getProductsByCategory: async (categoryId: number): Promise<Product[]> => {
    const { data } = await axiosInstance.get<Product[]>(
      `/categories/${categoryId}/products`,
    );
    return data;
  },

  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const { data } = await axiosInstance.post<LoginResponse>(
      "/auth/login",
      credentials,
    );
    return data;
  },

  getProfile: async (token: string): Promise<UserProfile> => {
    const { data } = await axiosInstance.get<UserProfile>("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};
