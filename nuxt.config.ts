// https://nuxt.com/docs/api/configuration/nuxt-config
import type {Strategies} from "@nuxtjs/i18n";

const DOMAINS = {
  pt: 'zephyrus.pt',
  en: 'zephyrusprosperity.com',
  es: 'zephyrusprosperity.com',
  nl: 'zephyrusprosperity.com',
};

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
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/i18n'
  ],
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
  },
  i18n: {
    baseUrl: DOMAINS.en,
    differentDomains: process.env.I18N_DOMAINS?.toLocaleLowerCase() === 'true',
    strategy: process.env.I18N_STRATEGY?.toLocaleLowerCase() as Strategies|undefined || 'prefix_except_default',
    langDir: 'locales/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        domain: DOMAINS.en,
        domainDefault: true,
      },
      {
        code: 'pt',
        iso: 'pt-PT',
        file: 'pt-PT.json',
        domain: DOMAINS.pt,
        domainDefault: true,
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.json',
        domain: DOMAINS.es,
      },
      {
          code: 'nl',
          iso: 'nl-NL',
          file: 'nl-NL.json',
          domain: DOMAINS.nl,
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true,
      cookieKey: 'zephyrus_i18n_redirected',
      redirectOn: 'root',
    },
    defaultLocale: 'en',
  }
})