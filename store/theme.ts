export const useThemeStore = defineStore('theme', () => {
    const DEFAULT_THEME = ref('dark');
    const THEMES_BY_DATE = [
        { theme: 'christmas', start: { month: 12, day: 20 }, end: { month: 12, day: 31 } },
        { theme: 'halloween', start: { month: 10, day: 1 }, end: { month: 10, day: 31 } },
        { theme: 'valentine', start: { month: 2, day: 12 }, end: { month: 2, day: 16 } },
        { theme: 'newYear', start: { month: 12, day: 30 }, end: { month: 1, day: 3 } },
        { theme: 'chineseNewYear', start: { month: 1, day: 21 }, end: { month: 1, day: 31 } },
        { theme: 'easter', start: { month: 4, day: 1 }, end: { month: 4, day: 15 } }
    ];
    const AVAILABLE_THEMES = computed(() => {
        const now = new Date();
        const themes = ['light', 'dark'];

        THEMES_BY_DATE.forEach(({ theme, start, end }) => {
            if (_isDateInRange(start, end, now)) {
                DEFAULT_THEME.value = theme;
                themes.push(theme);
            }
        });

        return themes;
    });
    const { cookiesEnabledIds } = useCookieControl();
    const theme = cookiesEnabledIds?.value?.includes('zephyrus_theme') ? useCookie('zephyrus_theme') : ref(AVAILABLE_THEMES[0]);
    const isDark = computed(() => theme.value === 'dark');

    function _isDateInRange(start, end, now) {
        const startDate = new Date(now.getFullYear(), start.month - 1, start.day);
        const endDate = new Date(now.getFullYear(), end.month - 1, end.day);
        return now >= startDate && now <= endDate;
    };

    function _nextTheme() {
        if (!AVAILABLE_THEMES.value.includes(theme.value)) return DEFAULT_THEME.value;
        const actualIndex = AVAILABLE_THEMES.value.indexOf(theme.value) || 0;
        return AVAILABLE_THEMES.value[(actualIndex + 1) % AVAILABLE_THEMES.value.length];
    }

    function toggleTheme() {
        setTheme(_nextTheme());
    }

    function setTheme(newTheme) {
        if (!AVAILABLE_THEMES.value.includes(newTheme)) {
            newTheme = _nextTheme();
        }
        theme.value = newTheme;
        document.documentElement.setAttribute('data-theme', theme.value);
    }

    function init() {
        setTheme(theme.value);
    }

    return { theme, isDark, AVAILABLE_THEMES, toggleTheme, setTheme, init };
});