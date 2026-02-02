"use client";

import { useCart } from "@/hooks/useCart";

export default function ShopPage() {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Shop</h1>
        <p className="text-gray-500 mt-2">Browse our collection of products.</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for products */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400">
              Product Image {item}
            </div>
            <h3 className="font-semibold text-lg">Product {item}</h3>
            <p className="text-gray-500 text-sm mb-2">Category</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">$99.00</span>
              <button
                onClick={() =>
                  addItem({
                    id: item,
                    name: `Product ${item}`,
                    price: 99.0,
                    category: "Category",
                  })
                }
                className="px-3 py-1 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
