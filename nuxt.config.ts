// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: [
    "@vant/nuxt",
    "@pinia/nuxt",
  ],
  vant: {
    // importStyle: true,
    // lazyload: false,
    // importStyle: true,
    // excludeExports: ['Lazyload', 'Locale'],
    // components: [],
    // imports: [],
    // include: [],
    // exclude: [],
  },
  // styleResources: {
  //   // scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss']
  // }
})
