// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png?v=1232',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png?v=1232',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '194x194',
          href: '/favicon-194x194.png?v=1232',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-chrome-192x192.png?v=1232',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png?v=1232',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest?v=1232',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg?v=1232',
          color: '#000000',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico?v=1232',
        },
      ],
      meta: [
        {
          name: 'apple-mobile-web-app-title',
          content: 'Zephyrus Prosperity',
        },
        {
          name: 'application-name',
          content: 'Zephyrus Prosperity',
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff',
        },
        {
          name: 'msapplication-TileImage',
          content: '/mstile-144x144.png?v=1232',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/seo'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  site: {
    url: 'https://zephyrus.pt',
    name: 'Zephyrus Prosperity',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en',
  },
  seo: {
    automaticDefaults: true,
  }
})