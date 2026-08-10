// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   modules: ['@nuxt/ui', '@nuxt/content', 'nuxt-studio'],
  css: ["~/assets/css/main.css"],
  fonts: {
     families: [
       {
        name: "Libre Baskerville",
        provider: "google",
        weights: [400, 500, 600, 700],
        styles: ["normal", "italic"],
      },
      {
       name: "Inconsolata",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 800, 900],
        styles: ["normal"],
      },
    ],
  },

  app: {
    baseURL: '/',
    head: {
      title: 'SEDHC - Sociedad Española de Historia de la Construcción',
      htmlAttrs: { lang: 'es' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      ],
      meta: [
        { name: 'description', content: 'La SEDHC se propone facilitar los contactos entre las personas que se interesen por este ámbito del conocimiento en España, tanto desde el punto de vista académico como profesional, o, simplemente como resultado de un interés personal' },
        { name: 'keywords', content: 'SEDHC, historia, construcción, España, congresos, revista' },
        // Open Graph / Twitter fallbacks — overridden per-page via useSeoMeta()
        { property: 'og:title', content: 'SEDHC - Sociedad Española de Historia de la Construcción' },
        { property: 'og:description', content: 'La SEDHC se propone facilitar los contactos entre las personas que se interesen por este ámbito del conocimiento en España, tanto desde el punto de vista académico como profesional, o, simplemente como resultado de un interés personal' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://sedhc.es/sedhc_og_image.jpg' },
        { property: 'og:locale', content: 'es_ES' },
        { property: 'og:site_name', content: 'SEDHC - Sociedad Española de Historia de la Construcción' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://sedhc.netlify.app/',
    },
  },
  content: {
    renderer: {
      anchorLinks: { h2: false, h3: false, h4: false },
    },
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'alfredocalosci',
      repo: 'sedhcV3',
      branch: 'master',
    },
  },

  nitro: {
    preset: 'netlify',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
})