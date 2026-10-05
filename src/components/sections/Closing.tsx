"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolioData } from "@/data/portfolio";

export function Closing() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="contact"
      aria-label="Closing Statement and Contact"
      className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Narrative Closing Card with Hero Visual Language Loop */}
      <div className="relative rounded-[32px] overflow-hidden bg-neutral-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-neutral-800">
        {/* Background Visual Anchor (Same family as opening cover to create loop) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src={personal.heroImage}
            alt="Closing background texture"
            fill
            sizes="100vw"
            className="object-cover object-center filter grayscale contrast-125 scale-105"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal direction="up" delay={0.1}>
            <SectionLabel
              number="07"
              label="Conclusion & Inquiries"
              className="bg-white/10 text-white border-white/20 mb-8"
            />
          </Reveal>

          {/* Large Indonesian / Universal Thank You Headline */}
          <Reveal direction="up" delay={0.2} duration={0.8}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight uppercase leading-[0.95] mb-6">
              TERIMA KASIH.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3} duration={0.8}>
            <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed mb-12">
              Let&apos;s engineer something extraordinary together. Open for collaborative
              software engineering, frontend architecture, and design system leadership.
            </p>
          </Reveal>

          {/* Direct Interactive Email Copy Box */}
          <Reveal direction="up" delay={0.4} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mb-12">
              <a
                href={`mailto:${personal.email}`}
                className="w-full sm:flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-neutral-950 font-bold text-sm tracking-wide uppercase hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span>Start Conversation</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-all backdrop-blur-md"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-300" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* Social Network Directory */}
          <Reveal direction="up" delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10 text-xs font-mono tracking-wider uppercase text-neutral-400">
              {personal.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--accent)] opacity-70" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Editorial Footer Bottom Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 mt-12 border-t border-neutral-900/10 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} {personal.name}.</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">All Rights Reserved.</span>
        </div>

        <div className="flex items-center gap-2 text-neutral-400">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Designed with Next.js 16, Tailwind & Motion for React</span>
        </div>
      </div>
    </footer>
  );
}
