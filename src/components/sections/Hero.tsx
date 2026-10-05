"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { FloatInOut } from "@/components/motion/FloatInOut";
import { ContactChip } from "@/components/ui/ContactChip";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      aria-label="Introduction & Cover"
      className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Editorial Top Metadata Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-neutral-900/10 pb-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
        <Reveal direction="down" delay={0.1}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
        </Reveal>

        <Reveal direction="down" delay={0.2}>
          <div className="flex items-center gap-4">
            <span>Volume 01</span>
            <span>•</span>
            <span>Archive 2026</span>
          </div>
        </Reveal>
      </div>

      {/* Main Editorial Hero Grid */}
      <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Oversized Editorial Typography & Identity */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          <Reveal direction="up" delay={0.2} duration={0.8}>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent)] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio Works</span>
            </div>
          </Reveal>

          {/* Massive Display Title */}
          <Reveal direction="up" delay={0.3} duration={0.9}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase leading-[0.88] text-neutral-900 mb-6">
              PORT-
              <br />
              <span className="text-neutral-400 font-light italic">FOLIO</span>
            </h1>
          </Reveal>

          {/* Personal Name & Professional Title */}
          <Reveal direction="up" delay={0.4} duration={0.8}>
            <div className="space-y-3 max-w-xl">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                  {personal.name}
                </span>
                <span className="text-sm font-mono text-neutral-500 uppercase">
                  / [IDN]
                </span>
              </div>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                {personal.role}. {personal.shortBio}
              </p>
            </div>
          </Reveal>

          {/* Action CTAs */}
          <Reveal direction="up" delay={0.5} duration={0.8}>
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <ContactChip
                label="Explore Works"
                href="#experience"
                external={false}
                variant="primary"
              />
              <ContactChip
                label="Get in Touch"
                href="#contact"
                external={false}
                variant="secondary"
              />
            </div>
          </Reveal>
        </div>

        {/* Right Column: Hero Photographic Anchor Card */}
        <div className="lg:col-span-5 relative">
          <Reveal direction="scale" delay={0.35} duration={1.1}>
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[28px] overflow-hidden bg-neutral-200 border border-neutral-900/10 shadow-2xl group">
              <Image
                src={personal.heroImage}
                alt={personal.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Editorial Gradient Overlay & Card Tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6">
                <FloatInOut yDistance={6} duration={4.2}>
                  <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-lg text-neutral-900 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                        Creative Direction
                      </p>
                      <p className="text-sm font-bold tracking-tight">
                        Software & Motion Design
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono text-xs">
                      26
                    </span>
                  </div>
                </FloatInOut>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Hero Bottom Navigation Indicator */}
      <div className="flex items-center justify-between pt-6 border-t border-neutral-900/10 text-xs font-mono text-neutral-500">
        <a
          href="#about"
          className="inline-flex items-center gap-2 hover:text-neutral-900 transition-colors uppercase tracking-wider group"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[var(--accent)] group-hover:translate-y-1 transition-transform" />
          <span>Scroll to uncover profile</span>
        </a>
        <div className="hidden sm:flex items-center gap-6">
          <span>Lat: 7.02° S</span>
          <span>Lon: 112.75° E</span>
        </div>
      </div>
    </section>
  );
}
