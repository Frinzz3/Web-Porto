"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between px-5 py-3 rounded-full bg-white/80 border border-neutral-900/10 shadow-sm backdrop-blur-md"
        >
          {/* Brand Monogram & Name */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 font-bold tracking-tight text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg py-1 px-1.5"
          >
            <span className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono font-bold">
              FN
            </span>
            <span className="text-sm tracking-tight hidden sm:inline">
              Fariel N. R.
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-neutral-600">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full transition-all duration-150 hover:text-neutral-950 hover:bg-neutral-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-3xl bg-white/95 border border-neutral-900/10 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-800 hover:bg-neutral-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
