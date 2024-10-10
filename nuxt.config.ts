// https://nuxt.com/docs/api/configuration/nuxt-config
import type {Strategies} from "@nuxtjs/i18n";

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
    'nuxt-swiper',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@dargmuesli/nuxt-cookie-control',
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
  ogImage: { enabled: false },
  schemaOrg: { enabled: false },
  seo: {
    automaticDefaults: true,
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    strategy: process.env.I18N_STRATEGY?.toLocaleLowerCase() as Strategies|undefined || 'prefix_and_default',
    langDir: 'locales/',
    locales: [
      {
        code: 'en',
        name: 'English',
        country: 'us',
        language: 'en-US',
        file: 'en-US.json',
      },
      {
        code: 'es',
        name: 'Español',
        country: 'es',
        language: 'es-ES',
        file: 'es-ES.json',
      },
      {
        code: 'nl',
        name: 'Nederlands',
        country: 'nl',
        language: 'nl-NL',
        file: 'nl-NL.json',
      },
      {
        code: 'pt',
        name: 'Português',
        country: 'pt',
        language: 'pt-PT',
        file: 'pt-PT.json',
      },
      {
        code: 'br',
        name: 'Português (BR)',
        country: 'br',
        language: 'pt-BR',
        file: 'pt-BR.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieCrossOrigin: true,
      cookieKey: 'zephyrus_i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    defaultLocale: 'en',
  },
  cookieControl: {
    barPosition: 'bottom-right',
    closeModalOnClickOutside: false,
    cookies: {
      necessary: [
        {
          description: {
            en: 'This cookie stores the cookies consent preferences.',
            es: 'Esta cookie almacena las preferencias de consentimiento de cookies.',
            nl: 'Deze cookie slaat de cookievoorkeuren op.',
            pt: 'Este cookie armazena as preferências de consentimento de cookies.',
          },
          id: 'zephyrus_ncc_c',
          name: {
            en: 'Cookie Consent Preferences',
            es: 'Preferencias de consentimiento de cookies',
            nl: 'Cookievoorkeuren',
            pt: 'Preferências de consentimento de cookies',
          },
          targetCookieIds: ['zephyrus_ncc_c'],
        },
        {
          description: {
            en: 'This cookie stores the cookies enabled preferences.',
            es: 'Esta cookie almacena las preferencias de cookies habilitadas.',
            nl: 'Deze cookie slaat de ingeschakelde cookievoorkeuren op.',
            pt: 'Este cookie armazena as preferências de cookies habilitadas.',
          },
          id: 'zephyrus_ncc_e',
          name: {
            en: 'Cookie Enabled Preferences',
            es: 'Preferencias de cookies habilitadas',
            nl: 'Ingeschakelde cookievoorkeuren',
            pt: 'Preferências de cookies habilitadas',
          },
          targetCookieIds: ['zephyrus_ncc_e'],
        }
      ],
      optional: [
        {
          description: {
            en: 'This cookie stores the cookies enabled preferences.',
            es: 'Esta cookie almacena las preferencias de cookies habilitadas.',
            nl: 'Deze cookie slaat de ingeschakelde cookievoorkeuren op.',
            pt: 'Este cookie armazena as preferências de cookies habilitadas.',
          },
          isPreselected: true,
          id: 'zephyrus_i18n_redirected',
          name: {
            en: 'Cookie Enabled Preferences',
            es: 'Preferencias de cookies habilitadas',
            nl: 'Ingeschakelde cookievoorkeuren',
            pt: 'Preferências de cookies habilitadas',
          },
          targetCookieIds: ['zephyrus_i18n_redirected'],
        }

      ],
    },
    cookieNameIsConsentGiven: 'zephyrus_ncc_c',
    cookieNameCookiesEnabledIds: 'zephyrus_ncc_e',
    isControlButtonEnabled: false,
    locales: [
      'en',
      'es',
      'nl',
      'pt',
    ],
  },
})