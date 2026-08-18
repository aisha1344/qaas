'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only animate when the value changes or component mounts
    const animation = animate(count, value, {
      duration: 2, // Animation duration in seconds
      ease: "easeOut",
    });

    // Optional: Use useTransform to update text content directly (better performance)
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = v.toLocaleString();
      }
    });

    return () => {
      animation.stop();
      unsubscribe();
    }
  }, [count, value, rounded]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
}