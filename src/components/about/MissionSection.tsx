"use client";

import ParallaxSection from "@/components/ParallaxSection";
import Image from "next/image";
import { MISSION_SECTIONS } from "@/constants/about";

export default function MissionSection() {
  return (
    <div className="space-y-4">
      {MISSION_SECTIONS.map((section, index) => (
        <ParallaxSection key={index} index={index} className={`${section.bgColor}`}>
          <div className="flex flex-col md:flex-row h-full">
            {/* Content */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                0{index + 1}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{section.title}</h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 relative overflow-hidden bg-muted">
              <Image
                src={section.image}
                alt={section.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </ParallaxSection>
      ))}
    </div>
  );
}
