"use client";

import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, Loader2, Wallet } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-border shadow-xl"
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. We have sent a confirmation email to your
            inbox.
          </p>
          <Link
            href="/"
            className="block w-full py-3 px-4 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link
          href="/shop"
          className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <Link
        href="/shop"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block transition-colors"
      >
        &larr; Back to Shop
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-8">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Info */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </section>

            {/* Shipping Info */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="123 Main St, Apt 4B"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="New York"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="zip" className="text-sm font-medium">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="10001"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium">Credit Card</span>
                </div>
                <div
                  onClick={() => setPaymentMethod("paypal")}
                  className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                    paymentMethod === "paypal"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Wallet className="w-5 h-5" />
                  <span className="font-medium">PayPal</span>
                </div>
              </div>

              {/* Card Details (Mock) */}
              {paymentMethod === "card" && (
                <div className="mt-4 p-4 border border-border rounded-xl bg-secondary/10 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Card Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Expiry</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">CVC</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </section>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
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
              form="checkout-form"
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
        </div>
      </div>
    </div>
  );
}
