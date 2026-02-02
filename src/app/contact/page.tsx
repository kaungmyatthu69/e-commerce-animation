"use client";

import ParallaxScroll from "@/components/ParallaxScroll";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="relative z-10 bg-background mb-[60vh] rounded-b-[3rem] shadow-2xl">
        {/* Intro Section */}
        <section className="h-[40vh] flex flex-col items-center justify-center text-center px-4">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            We&apos;d love to hear from you. Reach out with any questions.
          </p>
        </section>

        <main>
          {/* Contact Form Section */}
          <section className="py-20 bg-stone-100 dark:bg-zinc-900 overflow-hidden">
            <div className="container px-4 mx-auto">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                <div className="flex-1 p-8 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-sm">
                  <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                  {formStatus === "success" ? (
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl text-center">
                      <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                      <p>We&apos;ll get back to you as soon as possible.</p>
                      <button
                        onClick={() => setFormStatus("idle")}
                        className="mt-4 text-sm font-medium underline"
                      >
                        Send another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                          placeholder="How can we help?"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full py-3 bg-foreground text-background font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
                      >
                        {formStatus === "submitting" ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

                {/* Parallax Info Section */}
                <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
                  <ParallaxScroll
                    offset={30}
                    className="w-full h-full absolute inset-0"
                  >
                    <div className="w-full h-full bg-stone-200 dark:bg-stone-950 rounded-2xl opacity-50 absolute inset-0 transform rotate-3" />
                  </ParallaxScroll>

                  <div className="relative z-10 text-center space-y-8 p-8">
                    <ParallaxScroll offset={-20}>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                          <Mail className="w-6 h-6" />
                        </div>
                        <p className="font-medium">support@eshop.com</p>
                        <p className="text-sm text-muted-foreground">
                          Response within 24h
                        </p>
                      </div>
                    </ParallaxScroll>

                    <ParallaxScroll offset={-40}>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                          <Phone className="w-6 h-6" />
                        </div>
                        <p className="font-medium">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">
                          Mon-Fri, 9am - 5pm EST
                        </p>
                      </div>
                    </ParallaxScroll>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Map Section (Fixed Under Layer) */}
      <div className="fixed bottom-0 left-0 w-full h-[90vh] z-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800">
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <p className="text-slate-400 font-bold text-4xl opacity-20">
            Interactive Map Placeholder
          </p>
        </div>

        <div className="absolute inset-0  flex items-center container px-4 mx-auto pointer-events-none">
          <div className="bg-background/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-sm pointer-events-auto border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Our Flagship Store</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  123 Fashion Avenue
                  <br />
                  New York, NY 10001
                </p>
                <a
                  href="#"
                  className="text-sm font-medium border-b border-foreground hover:opacity-70 transition-opacity"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-background">
        <Footer />
      </div>
    </div>
  );
}
