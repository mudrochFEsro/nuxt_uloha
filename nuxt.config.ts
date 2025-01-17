export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Mulish: [400, 600, 900] // Vyber hrúbky písma, ktoré potrebuješ
    },
    display: 'swap', // Odporúčané pre lepší výkon
  },
  css: ['@/assets/scss/global.scss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
