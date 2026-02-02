import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

export function useCart() {
  const store = useCartStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsHydrated(true);
  }, []);

  // To prevent hydration mismatch, we only return items after the component has mounted on the client
  const items = isHydrated ? store.items : [];

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return {
    ...store,
    items,
    totalItems,
    totalPrice,
  };
}
