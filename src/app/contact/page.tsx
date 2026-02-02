"use client";

import ParallaxSection from "@/components/ParallaxSection";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
  };

  return (
    <div className="min-h-[200vh] bg-background font-[family-name:var(--font-sans)] pb-20">
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
          We'd love to hear from you. Reach out with any questions.
        </p>
      </section>

      <main className="space-y-4">
        {/* Card 1: Contact Form */}
        <ParallaxSection index={0} className="bg-stone-100 dark:bg-zinc-900">
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-zinc-800/50">
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              {formStatus === "success" ? (
                <div className="p-6 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl text-center">
                  <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                  <p>We'll get back to you as soon as possible.</p>
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
            <div className="hidden md:flex flex-1 relative bg-stone-200 dark:bg-stone-950 items-center justify-center p-12">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
               <div className="relative z-10 text-center space-y-8">
                 <div className="space-y-2">
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <Mail className="w-6 h-6" />
                    </div>
                    <p className="font-medium">support@eshop.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24h</p>
                 </div>
                 <div className="space-y-2">
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <Phone className="w-6 h-6" />
                    </div>
                    <p className="font-medium">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am - 5pm EST</p>
                 </div>
               </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Card 2: Location / Map */}
        <ParallaxSection index={1} className="bg-slate-100 dark:bg-slate-900">
           <div className="flex flex-col h-full relative">
              <div className="absolute inset-0 z-0">
                {/* Placeholder for Map - replacing actual iframe for performance/simplicity */}
                <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <p className="text-slate-400 font-bold text-2xl">Interactive Map Placeholder</p>
                </div>
              </div>

              <div className="relative z-10 p-8 md:p-12 pointer-events-none h-full flex items-end">
                 <div className="bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-sm pointer-events-auto border border-border">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-full shrink-0">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Our Flagship Store</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                123 Fashion Avenue<br />
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
        </ParallaxSection>
      </main>

      <section className="h-[20vh]"></section>
    </div>
  );
}
