import { z, defineCollection } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    heroTagline: z.string(),
    shortDescription: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    credentials: z.array(z.string()),
    bioShort: z.string(),
    bioLong: z.string(),
    headshot: z.string().or(z.object({ src: z.string(), alt: z.string().optional() })),
    order: z.number(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    excerpt: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    // Template already renders the post title as the page <h1>. In markdown files, start with a paragraph or ## heading—do not include a # Title line.
  }),
});

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

export const collections = { services, team, blog, faqs };
