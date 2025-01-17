export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Mulish: [400, 600, 900]
        },
        display: 'swap',
    },
    css: [
        '@/assets/scss/global.scss',
    ],
    components: {
        global: true,
        dirs: ['~/components']
    },
    devtools: {enabled: true},
    compatibilityDate: '2025-01-17',
});
