import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartState } from "@/types/cart";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (newItem) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === newItem.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
            isCartOpen: true,
          });
        } else {
          set({
            items: [...items, { ...newItem, quantity: 1 }],
            isCartOpen: true,
          });
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) {
          get().removeItem(id);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      setIsCartOpen: (isOpen) => {
        set({ isCartOpen: isOpen });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
