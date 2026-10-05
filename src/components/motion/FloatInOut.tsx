"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface FloatInOutProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yDistance?: number;
  rotateDistance?: number;
  delay?: number;
}

export function FloatInOut({
  children,
  className,
  duration = 4,
  yDistance = 6,
  rotateDistance = 1,
  delay = 0,
}: FloatInOutProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-yDistance, yDistance, -yDistance],
        rotate: [-rotateDistance, rotateDistance, -rotateDistance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
