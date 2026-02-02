"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutHero() {
  return (
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
  );
}
