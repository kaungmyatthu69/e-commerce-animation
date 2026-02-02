"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactHero() {
  return (
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
  );
}
