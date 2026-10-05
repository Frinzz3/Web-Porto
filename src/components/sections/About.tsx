"use client";

import React from "react";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { FloatInOut } from "@/components/motion/FloatInOut";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactChip } from "@/components/ui/ContactChip";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      aria-label="About the Engineer"
      className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (7 cols): Narrative & Context */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <Reveal direction="up" delay={0.1}>
              <SectionLabel number="01" label="Profile Narrative" className="mb-6" />
            </Reveal>

            <Reveal direction="up" delay={0.2} duration={0.8}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-8">
                Bridging rigorous computational engineering with refined editorial aesthetics.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.3} duration={0.8}>
              <div className="space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                <p>
                  I am a frontend engineer, systems builder, and motion designer obsessed with
                  the delicate balance between technical precision and human delight. My approach
                  treats code as an expressive medium — optimizing for frame rates and architecture
                  as rigorously as typography and layout hierarchy.
                </p>
                <p>
                  With roots in computer science and modern distributed applications, I build digital
                  products that avoid the monotony of generic corporate templates. Every detail,
                  from bespoke micro-interactions to zero-CLS page transitions, is calculated to
                  create memorable narrative software.
                </p>
              </div>
            </Reveal>

            {/* Quick Metadata Info Grid */}
            <Reveal direction="up" delay={0.4} duration={0.8}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-neutral-900/10 mt-10">
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Role Focus
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">
                    Frontend & Interaction
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Location
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-neutral-900">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{personal.location}</span>
                  </div>
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Status
                  </span>
                  <span className="text-sm font-semibold text-emerald-700">
                    Active & Available
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Social & Contact Strip */}
          <div className="pt-10">
            <Reveal direction="up" delay={0.5}>
              <span className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                Direct Channels
              </span>
            </Reveal>

            <StaggerContainer
              staggerChildren={0.08}
              className="flex flex-wrap items-center gap-2.5"
            >
              <StaggerItem>
                <ContactChip
                  label="Email Me"
                  href={`mailto:${personal.email}`}
                  icon={<Mail className="w-4 h-4" />}
                  variant="primary"
                />
              </StaggerItem>
              <StaggerItem>
                <ContactChip
                  label="GitHub"
                  href={personal.socials.find((s) => s.label === "GitHub")?.href || "#"}
                  icon={<GithubIcon className="w-4 h-4" />}
                />
              </StaggerItem>
              <StaggerItem>
                <ContactChip
                  label="LinkedIn"
                  href={personal.socials.find((s) => s.label === "LinkedIn")?.href || "#"}
                  icon={<LinkedinIcon className="w-4 h-4" />}
                />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Right Column (5 cols): Portrait Card */}
        <div className="lg:col-span-5">
          <Reveal direction="scale" delay={0.25} duration={1.0}>
            <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-neutral-200 border border-neutral-900/10 shadow-xl group">
              <Image
                src={personal.portrait}
                alt="Portrait of Fariel at studio work"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              {/* Editorial Frame Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <FloatInOut yDistance={5} duration={4.8} delay={0.5}>
                  <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-between text-neutral-900">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        Observation & Craft
                      </p>
                      <p className="text-sm font-semibold">
                        Studio Research & Prototyping
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[var(--accent)]">
                      [FIGMA + CODE]
                    </span>
                  </div>
                </FloatInOut>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
