"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Calendar, ShieldCheck, Maximize2, X } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { FloatInOut } from "@/components/motion/FloatInOut";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolioData } from "@/data/portfolio";

export function Certificates() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      id="certificates"
      aria-label="Certificates and Accreditations"
      className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-neutral-900/10 pb-8">
        <div>
          <Reveal direction="up" delay={0.1}>
            <SectionLabel number="06" label="Verified Accreditations" className="mb-4" />
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Honors & Credentials
            </h2>
          </Reveal>
        </div>
        <Reveal direction="up" delay={0.3}>
          <p className="max-w-md text-sm sm:text-base text-neutral-600">
            Formal recognition of domain mastery in human-computer interaction,
            distributed systems, and engineering excellence.
          </p>
        </Reveal>
      </div>

      {certificates.map((cert) => (
        <div
          key={cert.title}
          className="editorial-card p-6 sm:p-10 lg:p-12 border border-neutral-900/10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left/Main Column (8 cols): Large Document Hero Showcase */}
            <div className="lg:col-span-8">
              <Reveal direction="scale" delay={0.2} duration={1.0}>
                <div
                  onClick={() => setSelectedCert(cert.image)}
                  className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-white border border-neutral-900/10 shadow-xl cursor-pointer group transition-all duration-300 hover:shadow-2xl"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Hover Overlay with Click to Zoom */}
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-neutral-900 font-semibold text-xs tracking-wider uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4 text-[var(--accent)]" />
                      <span>View Full Document</span>
                    </span>
                  </div>

                  {/* Corner Badge with subtle float */}
                  <div className="absolute top-4 left-4">
                    <FloatInOut yDistance={4} duration={3.8}>
                      <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-900/10 text-xs font-mono font-semibold text-neutral-800 flex items-center gap-1.5 shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Cryptographically Signed</span>
                      </div>
                    </FloatInOut>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column (4 cols): Accreditation Details */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-neutral-600 bg-neutral-100 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{cert.date}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-neutral-900 mb-3 tracking-tight leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm text-neutral-600 mb-6">
                  Issued by <strong className="text-neutral-800">{cert.issuer}</strong> in
                  recognition of rigorous engineering capability and interactive interface architecture.
                </p>

                <div className="space-y-3 pt-6 border-t border-neutral-100">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">CREDENTIAL ID:</span>
                    <span className="font-semibold text-neutral-700">IAT-2023-88219</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">VERIFICATION:</span>
                    <span className="text-emerald-700 font-semibold">VALID / PERMANENT</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(cert.image)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <Award className="w-4 h-4 text-[var(--accent)]" />
                <span>Examine High-Res Certificate</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCert}
              alt="High-resolution certificate view"
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
