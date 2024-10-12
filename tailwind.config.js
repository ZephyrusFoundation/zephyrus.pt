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
      {
        newYear: {
          ...themes['bumblebee'],
          primary: '#FFD700',
          secondary: '#C0C0C0',
          accent: '#FFFFFF',
          neutral: '#000000',
          'base-100': '#FFFFFF',
          '--icon': '0 0 0',
          '--icon-content': '100% 0 0',
        },
      },
      {
        halloween: {
          ...themes['dracula'],
          primary: '#FF7518',
          secondary: '#4B0082',
          accent: '#FFD700',
          neutral: '#000000',
          'base-100': '#1E1E1E',
          '--icon': '30% 70% 0',
          '--icon-content': '100% 100% 0',
        },
      },
      {
        christmas: {
          ...themes['autumn'],
          primary: '#FF0000',
          secondary: '#008000',
          accent: '#FFFFFF',
          neutral: '#000000',
          'base-100': '#FFFFFF',
          '--icon': '100% 0 0',
          '--icon-content': '0 100% 0',
        },
      },
      {
        valentine: {
          ...themes['valentine'],
          primary: '#FF69B4',
          secondary: '#FFB6C1',
          accent: '#FFD700',
          neutral: '#000000',
          'base-100': '#FFFFFF',
          '--icon': '100% 50% 50%',
          '--icon-content': '50% 0 0',
        },
      },
      {
        chineseNewYear: {
          ...themes['bumblebee'],
          primary: '#FF0000',
          secondary: '#FFD700',
          accent: '#FFFFE0',
          neutral: '#000000',
          'base-100': '#FFFFFF',
          '--icon': '100% 0 0',
          '--icon-content': '100% 100% 0',
        },
      },
      {
        easter: {
          ...themes['pastel'],
          primary: '#FFD700',
          secondary: '#FF69B4',
          accent: '#87CEEB',
          neutral: '#FFFFFF',
          'base-100': '#F0FFF0',
          '--icon': '0 0 0',
          '--icon-content': '100% 0 0',
        },
      },
      {
        thanksgiving: {
          ...themes['bumblebee'],
          primary: '#FF7518',
          secondary: '#8B4513',
          accent: '#FFFF00',
          neutral: '#000000',
          'base-100': '#FFF5E6',
          '--icon': '0 0 0',
          '--icon-content': '100% 0 0',
        },
      },
    ],
  },
}
