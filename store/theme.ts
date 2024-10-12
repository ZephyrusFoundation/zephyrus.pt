export const useThemeStore = defineStore('theme', () => {
    const AVAILABLE_THEMES = ['light', 'dark'];
    const { cookiesEnabledIds } = useCookieControl();
    const theme = cookiesEnabledIds?.value?.includes('zephyrus_theme') ? useCookie('zephyrus_theme') : ref(AVAILABLE_THEMES[0]);
    const isDark = computed(() => theme.value === 'dark');

    function toggleTheme() {
        setTheme(isDark.value ? 'light' : 'dark');
    }

    function setTheme(newTheme) {
        if (!AVAILABLE_THEMES.includes(newTheme)) {
            newTheme = isDark.value ? 'light' : 'dark';
        }
        theme.value = newTheme;
        document.documentElement.setAttribute('data-theme', theme.value);
    }

    function init() {
        setTheme(theme.value);
    }

    return { theme, isDark, AVAILABLE_THEMES, toggleTheme, setTheme, init };
});