import { z, defineCollection } from "astro:content";

const siteSettings = defineCollection({
  type: "data",
  schema: z.object({
    practiceName: z.string(),
    tagline: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    googleMapsUrl: z.string().optional(),
    nav: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
    socials: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
  }),
});

const home = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().default("home"),
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
    heroEyebrow: z.string().optional(),
    heroTitle: z.string(),
    heroSubheadline: z.string().optional(),
    layoutStyle: z.enum(["default", "narrow"]).default("default"),
    intro: z.string().optional(),
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
    featured: z.boolean().default(false),
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
    featuredImage: z.string().optional(),
    videoUrl: z.string().optional(),
  }),
});

export const collections = { siteSettings, home, pages, team, services, blog };
