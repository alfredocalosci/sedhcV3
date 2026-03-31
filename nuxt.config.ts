// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   modules: [
     '@nuxt/ui',
     '@nuxt/content',
   ],
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
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://sedhc.es',
    },
  },
   content: {
     renderer: {
      anchorLinks: { h2: false, h3: false, h4: false },
    },
  },
  
})