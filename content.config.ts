import { defineCollection, defineContentConfig, z } from '@nuxt/content'
// import { z } from 'zod'

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
          slug: z.string(),
          description: z.string().optional(),
          date: z.date(),
          category: z.array(z.string()),
          image: z.object({
              src: z.string().editor({ input: 'media' }),
              alt: z.string()
            }).optional(),
          featured: z.boolean().default(false),
          url: z.string().optional(),
        }),
    }),
    temas: defineCollection({
      type: 'data',
       source: {
          include: "temas/**",
          exclude: ["**/.*"],
      },
      schema: z.object({
          id: z.number().int(),
          nombre: z.string(),
          desc: z.string(),
          rank: z.number().int(),
          slug: z.string()
      }),
    }),
    congresos: defineCollection({
      type: 'data',
       source: {
          include: "congresos/**",
          exclude: ["**/.*"],
      },
      schema: z.object({
          title: z.string(),
          slug: z.string(),
          year: z.number().int(),
          dateFrom: z.date().optional(),
          dateTo: z.date().optional(),
          url: z.string().optional(),
          lugar: z.string(),
          sede: z.string().optional(),
          image: z.object({
              src: z.string().editor({ input: 'media' }),
              alt: z.string()
          }).optional(),
          actas: z.array(z.object({
             title: z.string(),
             identifier: z.string()
          })).optional(),
          nacional_num: z.number().int().optional(),
          internacional_num: z.number().int().optional(),
          hispano_num: z.number().int().optional(),
          lat: z.number().optional(),
          lng: z.number().optional(),
          descripcion: z.string().optional(),
        }),
    }),
    entidades: defineCollection({
      type: 'page',
       source: {
          include: "entidades/**",
          exclude: ["**/.*"],
      },
      schema: z.object({
          title: z.string(),
          acronym: z.string().optional(),
          url: z.string().optional(),
          rank: z.number().int(),
          image: z.object({
              src: z.string().editor({ input: 'media' }),
              alt: z.string()
          }).optional(),
        }),
    }),
    textos: defineCollection({
      type: 'page',
       source: {
          include: "textos/**",
          exclude: ["**/.*"],
      },
      schema: z.object({
        webpage: z.string(),
        section: z.string(),
      }),
    }),
    revista: defineCollection({
      type: 'data',
       source: {
          include: "revista/**",
          exclude: ["**/.*"],
      },
      schema: z.object({
        volumen: z.number().int(),
        year: z.number().int(),
        url: z.string().optional(),
        image: z.object({
          src: z.string().editor({ input: 'media' }),
          alt: z.string()
        }).optional(),
      }),
    }),
  } // end collections
})