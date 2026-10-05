"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export function ParallaxImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  containerClassName,
  aspectRatio,
}: ParallaxImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, clipPath: "inset(6% 0% 6% 0% round 24px)" }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }
      }
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 1.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "relative overflow-hidden rounded-[24px] bg-neutral-200/50",
        containerClassName
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
          className={cn(
            "object-cover object-center w-full h-full",
            className
          )}
        />
      </motion.div>
    </motion.div>
  );
}
