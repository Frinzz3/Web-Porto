"use client";

import React from "react";
import { Code2, Layers, Cpu, Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const { skillGroups } = portfolioData;

  const getGroupIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-[var(--accent)]" />;
      case 1:
        return <Layers className="w-5 h-5 text-[var(--accent)]" />;
      case 2:
      default:
        return <Cpu className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Capabilities and Software Engineering Skills"
      className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (4 cols): Section Header & Editorial Context */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Reveal direction="up" delay={0.1}>
            <SectionLabel number="03" label="Technical Stack" className="mb-4" />
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6">
              Engineering Fluency
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-base text-neutral-600 leading-relaxed mb-8">
              A curated suite of modern technologies and methodologies honed for high-performance,
              accessible, and fluid interactive web products.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="p-6 rounded-2xl bg-white border border-neutral-900/10 shadow-sm space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                Philosophy
              </span>
              <p className="text-xs sm:text-sm text-neutral-600 leading-normal">
                Minimal dependencies, semantic server-first defaults, and purposeful motion
                primitives over bloated off-the-shelf templates.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column (8 cols): Categorized Skill Groups */}
        <div className="lg:col-span-8 space-y-8">
          <StaggerContainer staggerChildren={0.12} className="space-y-6">
            {skillGroups.map((group, groupIndex) => (
              <StaggerItem key={group.title}>
                <div className="editorial-card p-6 sm:p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-900/5">
                      {getGroupIcon(groupIndex)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                        {group.title}
                      </h3>
                      {group.description && (
                        <p className="text-xs sm:text-sm text-neutral-500">
                          {group.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-neutral-100 mt-4">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-900/5 hover:border-neutral-900/20 hover:bg-white hover:shadow-sm transition-all duration-200"
                      >
                        <span className="text-sm font-semibold text-neutral-800">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-xs font-mono text-neutral-400">
                            {skill.level || "Proficient"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
