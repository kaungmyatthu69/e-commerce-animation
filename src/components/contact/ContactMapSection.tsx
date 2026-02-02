"use client";

import { MapPin } from "lucide-react";

export default function ContactMapSection() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[60vh] z-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800">
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

      <div className="absolute inset-0 flex items-center container px-4 mx-auto pointer-events-none">
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
  );
}
