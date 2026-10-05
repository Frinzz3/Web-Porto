"use client";

import React from "react";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolioData } from "@/data/portfolio";

export function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      aria-label="Academic & Technical Background"
      className="py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-neutral-900/10 pb-8">
        <div>
          <Reveal direction="up" delay={0.1}>
            <SectionLabel number="02" label="Academic & Technical Track" className="mb-4" />
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Foundational Knowledge
            </h2>
          </Reveal>
        </div>
        <Reveal direction="up" delay={0.3}>
          <p className="max-w-md text-sm sm:text-base text-neutral-600">
            A continuous trajectory rooted in core computational principles, augmented
            by deep exploration of modern web systems.
          </p>
        </Reveal>
      </div>

      {/* Floating Editorial Cards */}
      <StaggerContainer
        staggerChildren={0.15}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {education.map((item, index) => (
          <StaggerItem key={item.institution}>
            <div className="editorial-card editorial-card-interactive p-8 sm:p-10 h-full flex flex-col justify-between group">
              <div>
                {/* Card Header with Icon and Period */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 border border-neutral-900/10 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                    {index === 0 ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-neutral-600 bg-neutral-100">
                    <Calendar className="w-3 h-3 text-[var(--accent)]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Institution & Program */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-2">
                  {item.institution}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[var(--accent)] mb-6">
                  {item.program}
                </p>

                {/* Achievements List */}
                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Key Highlights & Specializations
                  </span>
                  <ul className="space-y-2.5">
                    {item.achievements.map((achieve, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-neutral-600 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{achieve}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Annotation */}
              <div className="pt-8 mt-8 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>VERIFIED ACCREDITATION</span>
                <span className="group-hover:text-neutral-900 transition-colors">
                  ACADEMIC RECORD 0{index + 1}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
