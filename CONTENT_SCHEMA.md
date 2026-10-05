# CONTENT_SCHEMA.md — Data Model & Asset Contract

## Personal

```ts
export type PersonalProfile = {
  name: string
  headline: string
  role: string
  shortBio: string
  location?: string
  email: string
  phone?: string
  socials: {
    label: string
    href: string
  }[]
  portrait: string
  heroImage: string
}
```

## Education

```ts
export type Education = {
  institution: string
  program: string
  period: string
  achievements: string[]
  logo?: string
  certificate?: string
  link?: string
}
```

## Skill Group

```ts
export type SkillGroup = {
  title: string
  description?: string
  skills: {
    name: string
    level?: string
    icon?: string
  }[]
}
```

## Experience

```ts
export type Experience = {
  id: string
  organization: string
  role: string
  period: string
  location?: string
  description: string
  responsibilities: string[]
  outcomes: string[]
  images: string[]
  link?: string
}
```

## Certificate

```ts
export type Certificate = {
  title: string
  issuer: string
  date: string
  image: string
  credentialUrl?: string
}
```

## Asset rules

Recommended structure:

```text
public/images/
├── hero.webp
├── portrait.webp
├── education/
├── experience/
├── organization/
└── certificates/
```

Prefer WebP/AVIF for photos where practical. Keep source originals outside runtime assets if they are huge.
