# ARCHITECTURE.md — Portfolio Technical Architecture

## 1. Recommended Stack

### Core

- Next.js 16.x, App Router
- React 19.x
- TypeScript
- Tailwind CSS
- ESLint
- Turbopack via Next.js defaults

Next.js App Router adalah file-system router yang menggunakan Server Components, Suspense, dan Server Functions. Next.js 16.3 tersedia sebagai Active LTS per September 2026; gunakan patch terbaru yang dipasang oleh package manager, bukan hard-code versi patch dari dokumen ini.

### Animation

- `motion` untuk React UI animation, scroll reveal, layout animation, hover/tap, and micro-interaction.
- Gunakan GSAP + ScrollTrigger hanya bila implementasi membutuhkan timeline/sticky choreography yang Motion tidak buat sederhana. Jangan memasukkan GSAP secara default hanya karena portfolio terlihat animated.

### Assets

- `next/image` untuk raster images.
- SVG untuk icon/logo bila asset tersedia dalam bentuk vector.
- Jangan embed base64 untuk foto portfolio.

### Optional

- `next-sitemap` atau equivalent bila deployment/public discovery membutuhkan sitemap.
- Resend/form provider hanya jika contact form benar-benar dibutuhkan. Portfolio statis tidak perlu backend hanya untuk mengirim email.

## 2. Why This Stack

### Next.js

Cocok karena project membutuhkan:

- performance-friendly rendering.
- image optimization.
- metadata/SEO.
- component architecture.
- mudah dideploy ke Vercel atau platform Node-compatible.

### Motion

Motion menyediakan enter/exit, scroll-triggered, scroll-linked, layout, gesture, dan spring-based animation. Untuk portfolio ini, ia cukup untuk mayoritas motion tanpa membuat semua komponen menjadi imperative.

### GSAP — optional escalation

GSAP ScrollTrigger cocok untuk advanced scrub/pin/snap/timeline choreography. Tetapi dependency ini sebaiknya ditambahkan hanya setelah kebutuhan terbukti.

## 3. Rendering Strategy

Default:

- Server Components untuk content/layout/static section.
- Client Components hanya untuk komponen yang benar-benar membutuhkan browser interaction/animation state.

Contoh:

```text
app/page.tsx                 Server
components/portfolio/*       mixed
components/motion/*          Client
lib/content.ts               server-safe data
```

Jangan menambahkan `"use client"` ke root page hanya karena ada beberapa animated component.

## 4. Proposed Folder Structure

```text
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── opengraph-image.tsx
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── section-nav.tsx
│   │   └── page-shell.tsx
│   ├── portfolio/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── education.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── organization.tsx
│   │   ├── certificates.tsx
│   │   └── closing.tsx
│   ├── motion/
│   │   ├── reveal.tsx
│   │   ├── parallax.tsx
│   │   ├── stagger.tsx
│   │   └── reduced-motion.tsx
│   └── ui/
│       ├── image-card.tsx
│       ├── pill.tsx
│       ├── section-label.tsx
│       └── contact-chip.tsx
├── content/
│   ├── portfolio.ts
│   ├── experiences.ts
│   ├── education.ts
│   ├── skills.ts
│   └── certificates.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── documents/
├── lib/
│   ├── utils.ts
│   └── motion.ts
├── tests/
├── DESIGN.md
├── ARCHITECTURE.md
├── AGENTS.md
└── README.md
```

## 5. Content Architecture

Konten harus dipisahkan dari layout.

Contoh shape:

```ts
export type Experience = {
  id: string
  organization: string
  role: string
  period: string
  description: string
  outcomes: string[]
  images: string[]
  links?: { label: string; href: string }[]
}
```

Alasan: agent dapat mengubah data portfolio tanpa mengotak-atik animation/layout code.

## 6. Animation Architecture

Buat reusable primitives:

- `<Reveal />`
- `<Stagger />`
- `<ParallaxImage />`
- `<MagneticButton />` — hanya bila benar-benar terasa natural.
- `<SectionProgress />` — optional.

Semua primitive harus:

1. menerima className.
2. mendukung reduced motion.
3. tidak memicu hydration mismatch.
4. cleanup animation listener/controls.
5. tidak membuat scroll event listener manual jika Motion API cukup.

## 7. Performance Architecture

Target:

- LCP < 2.5s pada koneksi/device wajar.
- CLS serendah mungkin.
- Animasi utama 60fps pada perangkat modern.
- Hero image diberi ukuran/aspect ratio yang jelas.
- Lazy-load image di bawah fold.
- Hindari giant images tanpa compression.

Foto portfolio sebaiknya dikompres sebelum masuk `public/images`.

## 8. SEO / Metadata

Root layout harus memiliki:

- title template.
- description.
- viewport defaults.
- Open Graph image.
- Twitter/X card metadata bila dibutuhkan.
- canonical URL saat domain final diketahui.

## 9. Deployment

Pilihan pertama:

- GitHub → Vercel.

Alternatif:

- Cloudflare Pages / Workers setup yang kompatibel.
- Node hosting biasa.

Untuk static portfolio, jangan menambah database, CMS, atau API route tanpa kebutuhan nyata.
