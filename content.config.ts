import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    noticias: defineCollection({
    type: 'page',
      source: {
        include: "noticias/**",
        exclude: ["**/.*"],
      },
      schema: z.object({
        title: z.string(),
        sluug: z.string(),
        description: z.string().optional(),
        date: z.date(),
        category: z.array(z.string()),
        image: z.string().optional(),
        featured: z.boolean().default(false),
        url: z.string().optional(),
      }),
    }),
  }
});