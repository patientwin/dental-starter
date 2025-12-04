import { defineCollection, z } from "astro:content";

const siteSettings = defineCollection({
  type: "data",
  schema: z.object({
    practiceName: z.string(),
    tagline: z.string(),
    city: z.string(),
    state: z.string(),
    phone: z.string(),
    email: z.string().optional(),
    addressLine1: z.string(),
    addressLine2: z.string().optional(),
    googleMapsUrl: z.string().url().optional(),
    hours: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ),
    nav: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),
    socials: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),
  }),
});

const home = defineCollection({
  type: "content",
  schema: z.object({
    heroHeadline: z.string(),
    heroSubheadline: z.string(),
    heroBadge: z.string().optional(),
    heroPrimaryCtaLabel: z.string(),
    heroPrimaryCtaHref: z.string(),
    heroSecondaryCtaLabel: z.string(),
    heroSecondaryCtaHref: z.string(),
    reviewLine: z.string().optional(),
    insuranceNote: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    layoutStyle: z.enum(["default", "narrow"]).default("default"),
  }),
});

const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    credentials: z.array(z.string()).optional(),
    badges: z.array(z.string()).optional(),
    headshot: z.string().optional(),
    bioShort: z.string(),
    bioLong: z.string().optional(),
    focusAreas: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    category: z.string().optional(),
    tagline: z.string().optional(),
    summary: z.string(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { siteSettings, home, pages, team, services, blog };
