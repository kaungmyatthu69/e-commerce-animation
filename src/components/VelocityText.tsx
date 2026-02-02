"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Utility to wrap value within a range
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamic based on
   * screen size, but for simplicity we hardcode it here.
   */
  return (
    <div className="parallax overflow-hidden tracking-tighter m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="scroller font-black uppercase text-7xl md:text-9xl flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <span className="block mr-8 opacity-20">{children} </span>
        <span className="block mr-8 opacity-20">{children} </span>
        <span className="block mr-8 opacity-20">{children} </span>
        <span className="block mr-8 opacity-20">{children} </span>
        <span className="block mr-8 opacity-20">{children} </span>
        <span className="block mr-8 opacity-20">{children} </span>
        <span className="block mr-8 opacity-20">{children} </span>
        <span className="block mr-8 opacity-20">{children} </span>
      </motion.div>
    </div>
  );
}

export default function VelocityText() {
  return (
    <section className="py-20 overflow-hidden bg-background text-foreground select-none pointer-events-none">
      <ParallaxText baseVelocity={-5}>Style Redefined</ParallaxText>
      <ParallaxText baseVelocity={5}>Sustainable Future</ParallaxText>
    </section>
  );
}
