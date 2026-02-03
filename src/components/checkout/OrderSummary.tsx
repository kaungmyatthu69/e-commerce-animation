"use client";

import { useCartStore } from "@/store/cartStore";
import { Loader2 } from "lucide-react";

interface OrderSummaryProps {
  isProcessing: boolean;
  formId: string;
}

export default function OrderSummary({ isProcessing, formId }: OrderSummaryProps) {
  const items = useCartStore((state) => state.items);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="sticky top-24 rounded-2xl border border-border bg-secondary/5 p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-16 h-16 bg-secondary rounded-md flex items-center justify-center text-xs text-muted-foreground shrink-0 overflow-hidden">
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                "No Img"
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium line-clamp-1">{item.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">
                Qty: {item.quantity}
              </p>
              <p className="text-sm font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4 space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="submit"
        form={formId}
        disabled={isProcessing}
        className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          `Pay $${totalPrice.toFixed(2)}`
        )}
      </button>
      <p className="text-xs text-center text-muted-foreground mt-4">
        Secure checkout powered by Stripe (Mock)
      </p>
    </div>
  );
}
