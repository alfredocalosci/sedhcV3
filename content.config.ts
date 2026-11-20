import { defineCollection, defineContentConfig, z } from '@nuxt/content'
// import { z } from 'zod'

// Must match the `slug` values in content/temas/*.yaml.
// Using an enum makes Nuxt Studio render a dropdown instead of free text.
const TEMAS = [
  'cfp',
  'conferencias',
  'congresos',
  'exposiciones',
  'novedades-miembros',
  'publicaciones',
  'sociedad',
  'varios',
] as const

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
          description: z.string().optional(),
          date: z.date(),
          category: z.array(z.enum(TEMAS)),
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
          nombre: z.string(),
          desc: z.string(),
          rank: z.number(),
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
          year: z.number(),
          dateFrom: z.date().optional(),
          dateTo: z.date().optional(),
          url: z.string().optional(),
          lugar: z.string(),
          sede: z.string().optional(),
          image: z.object({
              src: z.string().editor({ input: 'media' }),
              alt: z.string()
          }).optional(),
          // default([]) works around a Nuxt Studio bug (still in 1.8.2):
          // its change detection only compares keys present in the original
          // document, so adding `actas` to a congreso without them is not seen
          // as a change. With a default, the original has [] and the array
          // length comparison detects the new item. Studio drops empty arrays
          // when saving, so files stay clean.
          actas: z.array(z.object({
             title: z.string(),
             identifier: z.string()
          })).default([]),
          nacional_num: z.number().optional(),
          internacional_num: z.number().optional(),
          hispano_num: z.number().optional(),
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
          rank: z.number(),
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
        volumen: z.number(),
        year: z.number(),
        url: z.string().optional(),
        image: z.object({
          src: z.string().editor({ input: 'media' }),
          alt: z.string()
        }).optional(),
      }),
    }),
  } // end collections
})