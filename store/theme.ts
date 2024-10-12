export const useThemeStore = defineStore('theme', () => {
    const AVAILABLE_THEMES = ['light', 'dark'];
    const { cookiesEnabledIds } = useCookieControl();
    const themeCookie = cookiesEnabledIds?.value?.includes('zephyrus_theme')
        ? useCookie('zephyrus_theme', { default: () => AVAILABLE_THEMES[0] })
        : null;
    const theme = ref(themeCookie?.value || AVAILABLE_THEMES[0]);
    const isDark = computed(() => theme.value === 'dark');

    function toggleTheme() {
        setTheme(isDark.value ? 'light' : 'dark');
    }

    function setTheme(newTheme) {
        if (!AVAILABLE_THEMES.includes(newTheme)) {
            newTheme = isDark.value ? 'light' : 'dark';
        }
        theme.value = newTheme;
        if (cookiesEnabledIds?.value?.includes('zephyrus_theme')) {
            themeCookie.value = newTheme;
        }
        document.documentElement.setAttribute('data-theme', theme.value);
    }

    function init() {
        setTheme(theme.value);
    }

    return { theme, isDark, AVAILABLE_THEMES, toggleTheme, setTheme, init };
});