"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="h-[50vh] flex flex-col items-center justify-center bg-background relative z-10">
      <h2 className="text-3xl font-bold mb-6">Want to get in touch?</h2>
      <Link
        href="/contact"
        className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity"
      >
        Contact Us
      </Link>
    </section>
  );
}
