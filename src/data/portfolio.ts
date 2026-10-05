export type PersonalProfile = {
  name: string;
  headline: string;
  role: string;
  shortBio: string;
  location?: string;
  email: string;
  phone?: string;
  socials: {
    label: string;
    href: string;
  }[];
  portrait: string;
  heroImage: string;
};

export type Education = {
  institution: string;
  program: string;
  period: string;
  achievements: string[];
  logo?: string;
  certificate?: string;
  link?: string;
};

export type SkillGroup = {
  title: string;
  description?: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
};

export type Experience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  outcomes: string[];
  images: string[];
  link?: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
};

export const portfolioData: {
  personal: PersonalProfile;
  education: Education[];
  skillGroups: SkillGroup[];
  experiences: Experience[];
  organizations: Experience[];
  certificates: Certificate[];
} = {
  personal: {
    name: "Fariel Nur Rizky",
    headline: "Creative Technologist & Software Engineer",
    role: "Full-Stack Engineer & Interactive UI Specialist",
    shortBio:
      "Crafting expressive digital systems, fluid interaction architectures, and editorial web experiences where engineering precision meets editorial visual design.",
    location: "Indonesia",
    email: "contact@fariel.dev", // [TODO: Replace with verified personal email]
    phone: "+62 812-XXXX-XXXX", // [TODO: Replace with verified phone number if desired]
    socials: [
      { label: "GitHub", href: "https://github.com/Frinzz03" },
      { label: "LinkedIn", href: "https://linkedin.com/in/" }, // [TODO: Replace with personal LinkedIn]
      { label: "Twitter / X", href: "https://x.com/" }, // [TODO: Replace with personal Twitter/X]
      { label: "Email", href: "mailto:contact@fariel.dev" },
    ],
    portrait: "/images/portrait.jpg",
    heroImage: "/images/hero.jpg",
  },
  education: [
    {
      institution: "Universitas Trunojoyo Madura",
      program: "Bachelor of Computer Science / Informatics Engineering",
      period: "2023 — Present",
      achievements: [
        "Specialized in Software Engineering, Distributed Systems, and Human-Centered Computing",
        "Lead developer for laboratory asset management and interactive systems",
        "Active contributor to campus technical working groups and developer initiatives",
      ],
      link: "#",
    },
    {
      institution: "Independent Technical Studies",
      program: "Modern Web Architectures & Interactive Motion Design",
      period: "2024 — 2026",
      achievements: [
        "In-depth research on zero-layout-shift microinteractions and reactive state systems",
        "Completed certified masteries in TypeScript, Next.js App Router, and Motion Engineering",
      ],
      link: "#",
    },
  ],
  skillGroups: [
    {
      title: "Core Technologies",
      description: "Foundational architecture and production languages",
      skills: [
        { name: "TypeScript", level: "Advanced" },
        { name: "Next.js / React 19", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Node.js", level: "Proficient" },
        { name: "Python / Data Science", level: "Proficient" },
      ],
    },
    {
      title: "Interaction & Design",
      description: "Motion systems, UI choreography, and visual craft",
      skills: [
        { name: "Motion for React", level: "Advanced" },
        { name: "Design Systems", level: "Advanced" },
        { name: "Editorial Typography", level: "Proficient" },
        { name: "Figma UI/UX", level: "Proficient" },
        { name: "Responsive Choreography", level: "Advanced" },
      ],
    },
    {
      title: "Engineering & Tooling",
      description: "Workflow, cloud infrastructure, and developer ergonomics",
      skills: [
        { name: "Git / GitHub", level: "Advanced" },
        { name: "REST & Web APIs", level: "Proficient" },
        { name: "Performance Optimization", level: "Advanced" },
        { name: "Accessibility (a11y)", level: "Proficient" },
      ],
    },
  ],
  experiences: [
    {
      id: "exp-1",
      organization: "Digital Product Studio",
      role: "Lead Frontend & Motion Engineer",
      period: "2024 — Present",
      location: "Remote / Hybrid",
      description:
        "Architected modern responsive web applications and interactive landing experiences with strict performance budgets and rich motion choreography.",
      responsibilities: [
        "Built modular component libraries adhering to strict WCAG 2.1 accessibility guidelines.",
        "Engineered zero-CLS scroll-linked animations and typography reveal sequences.",
        "Collaborated with UI/UX designers to translate Figma prototypes into production-grade React components.",
      ],
      outcomes: [
        "Reduced initial client bundle size by 38% through server component streaming.",
        "Achieved 99+ Lighthouse performance and accessibility scores across client deliverables.",
      ],
      images: ["/images/experience/exp-1.jpg"],
      link: "#",
    },
  ],
  organizations: [
    {
      id: "org-1",
      organization: "Student Developer Community & Research Lab",
      role: "Technical Lead & Workshop Coordinator",
      period: "2023 — 2025",
      location: "East Java, Indonesia",
      description:
        "Led cross-functional teams of student developers, mentored junior engineers on modern web development practices, and hosted hands-on engineering symposiums.",
      responsibilities: [
        "Curated curriculum and hosted technical bootcamps on Next.js, modern CSS, and state management.",
        "Organized collaborative hackathons and peer code review sessions.",
        "Guided university laboratory project deployments and internal system tooling.",
      ],
      outcomes: [
        "Mentored over 80+ participants in developing their first production-ready web applications.",
        "Built long-term collaborative ties with regional engineering chapters.",
      ],
      images: ["/images/organization/org-1.jpg"],
      link: "#",
    },
  ],
  certificates: [
    {
      title: "Certificate of Excellence in Software Engineering & HCI",
      issuer: "International Academy of Technology & Computing",
      date: "October 2023",
      image: "/images/certificates/certificate-1.jpg",
      credentialUrl: "#",
    },
  ],
};
