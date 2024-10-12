const themes = require("daisyui/src/theming/themes");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [],
  theme: {
    extend: {
      colors: {
        'icon': 'oklch(var(--icon) / <alpha-value>)',
        'icon-content': 'oklch(var(--icon-content) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['fantasy'],
          '--icon': '0 0 0',
          '--icon-content': '100% 0 0',
        },
      },
      {
        dark: {
          ...themes['dark'],
          '--icon': '100% 0 0',
          '--icon-content': '0 0 0',
        },
      },
    ],
  },
}

