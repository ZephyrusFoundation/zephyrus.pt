export const useThemeStore = defineStore('theme', () => {
    const themeCookie = useCookie('theme', { default: () => 'light' });
    const theme = ref(themeCookie.value);
    const isDark = computed(() => theme.value === 'dark');
    const AVAILABLE_THEMES = ['light', 'dark'];

    function toggleTheme() {
        setTheme(isDark.value ? 'light' : 'dark');
    }

    function setTheme(newTheme) {
        if (!AVAILABLE_THEMES.includes(newTheme)) {
            newTheme = isDark.value ? 'light' : 'dark';
        }
        theme.value = newTheme;
        document.documentElement.setAttribute('data-theme', theme.value);
        themeCookie.value = newTheme;
    }

    return { theme, isDark, AVAILABLE_THEMES, toggleTheme, setTheme };
}, {
    persist: {
        storage: sessionStorage,
        pick: ['theme'],
    },
})