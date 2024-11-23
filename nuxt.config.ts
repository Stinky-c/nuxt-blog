// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-23",
    devtools: { enabled: true },
    content: {
        highlight: {
            theme: {
                default: "github-light-default",
                dark: "catppuccin-mocha",
                light: "github-light-default",
            },
        },
    },

    modules: [
        "@nuxt/ui",
        "@nuxt/content",
        "@nuxt/eslint",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "@nuxtjs/robots",
    ],
});
