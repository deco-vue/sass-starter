export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-swiper"],
  css: ['@/assets/scss/main.scss'],
  app: {
    head: {
      title: 'WST Technologies',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  }
})
