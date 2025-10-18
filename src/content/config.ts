import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    coverImg: z.string().optional(),
    altImg: z.string().optional()
  }),
});

export const collections = {
  blog: blogCollection,
};