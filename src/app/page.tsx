import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Organization } from "@/components/sections/Organization";
import { Certificates } from "@/components/sections/Certificates";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-neutral-900 selection:text-white">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Single Page Narrative Stream */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Organization />
        <Certificates />
        <Closing />
      </main>
    </div>
  );
}
