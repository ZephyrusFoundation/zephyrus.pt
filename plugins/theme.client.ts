import {useThemeStore} from "~/store/theme";

export default defineNuxtPlugin(nuxtApp => {
    const theme = useThemeStore();
    const themeCookie = useCookie('theme', { default: () => 'light' });
    let initialTheme = themeCookie.value || 'light';
    theme.setTheme(initialTheme);
})