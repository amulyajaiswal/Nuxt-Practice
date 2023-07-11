// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // add style globally
  app: {
    head: {
      //Using CSS and JS Globall
      link: [
        { rel: "stylesheet", href: "css/style.css" },
        // { rel: "stylesheet", href: "cdn link" },
    ],
      script: [
        { src: "js/golbalscript.js", body: true },
        { src: "_nuxt/assets/js/golbalscript.js", body: true },
        // { src: "CDN-Link", body: true },
      ],

      // ASSETS File Use
    },
  },
  css: [
    // CSS file in the project
    '@/assets/css/style.css',
  ]
});
