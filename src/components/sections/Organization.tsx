"use client";

import React from "react";
import Image from "next/image";
import { Users, Calendar, Award, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolioData } from "@/data/portfolio";

export function Organization() {
  const { organizations } = portfolioData;

  return (
    <section
      id="organization"
      aria-label="Community Leadership & Collaborative Initiatives"
      className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-neutral-900/10 pb-8">
        <div>
          <Reveal direction="up" delay={0.1}>
            <SectionLabel number="05" label="Community & Leadership" className="mb-4" />
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Collaborative Impact
            </h2>
          </Reveal>
        </div>
        <Reveal direction="up" delay={0.3}>
          <p className="max-w-md text-sm sm:text-base text-neutral-600">
            Fostering technical cultures, organizing developer symposia, and scaling
            hands-on engineering knowledge.
          </p>
        </Reveal>
      </div>

      {organizations.map((org) => (
        <div
          key={org.id}
          className="editorial-card p-6 sm:p-10 lg:p-12 border border-neutral-900/10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (5 cols): Community / Workshop Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal direction="scale" delay={0.2} duration={0.9}>
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-[22px] overflow-hidden bg-neutral-100 border border-neutral-900/10 shadow-lg group">
                  <Image
                    src={org.images[0] || "/images/hero.jpg"}
                    alt={org.organization}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 text-xs font-mono text-neutral-800 flex items-center justify-between">
                    <span className="font-semibold">{org.organization}</span>
                    <span className="text-[var(--accent)] font-bold">[COMMUNITY WORKSHOP]</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column (7 cols): Narrative & Leadership Highlights */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-neutral-700 bg-neutral-100">
                    <Users className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{org.organization}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-neutral-500 bg-neutral-100/60">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{org.period}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-4 tracking-tight">
                  {org.role}
                </h3>

                <p className="text-base text-neutral-600 leading-relaxed mb-6">
                  {org.description}
                </p>

                {/* Key Initiatives */}
                <div className="space-y-3 mb-6">
                  <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                    Core Initiatives & Mentorship
                  </span>
                  <ul className="space-y-2">
                    {org.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Community Impact */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-900/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                    <Award className="w-4 h-4 text-[var(--accent)]" />
                    <span>Community Growth & Mentorship Milestones</span>
                  </div>
                  <ul className="space-y-1">
                    {org.outcomes.map((out, i) => (
                      <li key={i} className="text-xs sm:text-sm font-medium text-neutral-800">
                        • {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>EAST JAVA CHAPTER</span>
                <span>VOLUNTEER & LEADERSHIP</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
