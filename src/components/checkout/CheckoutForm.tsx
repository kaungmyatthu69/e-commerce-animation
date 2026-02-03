"use client";

import { useState } from "react";
import { CreditCard, Wallet } from "lucide-react";

interface CheckoutFormProps {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  id: string;
}

export default function CheckoutForm({ onSubmit, id }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-8">
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
  );
}
