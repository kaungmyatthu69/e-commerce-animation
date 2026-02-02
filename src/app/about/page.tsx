"use client";

import ParallaxSection from "@/components/ParallaxSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VelocityText from "@/components/VelocityText";
import Team from "@/components/Team";

const SECTIONS = [
  {
    title: "Our Mission",
    description:
      "We believe that style shouldn't come at the cost of the planet. Our mission is to redefine modern fashion by merging timeless aesthetics with sustainable practices.",
    bgColor: "bg-stone-100 dark:bg-stone-900",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Sustainability First",
    description:
      "From sourcing organic cotton to using recycled packaging, every decision we make is rooted in environmental responsibility. We are committed to reducing our carbon footprint.",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    image:
      "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Global Community",
    description:
      "Fashion connects us all. We collaborate with independent designers and artisans from around the world to bring you unique, high-quality pieces that tell a story.",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-[200vh] bg-background">
      {/* Intro Section */}
      <section className="h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          About Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Crafting the future of fashion, one stitch at a time.
        </p>
      </section>

      {/* Parallax Stacking Sections */}
      <main className="space-y-4">
        {SECTIONS.map((section, index) => (
          <ParallaxSection key={index} index={index} className={`${section.bgColor}`}>
            <div className="flex flex-col md:flex-row h-full">
              {/* Content */}
              <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  0{index + 1}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 relative overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={section.image}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </ParallaxSection>
        ))}
      </main>

      <VelocityText />
      <Team />

      {/* Footer / Next Steps */}
      <section className="h-[50vh] flex flex-col items-center justify-center bg-background relative z-10">
        <h2 className="text-3xl font-bold mb-6">Want to get in touch?</h2>
        <Link
          href="/contact"
          className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </section>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
