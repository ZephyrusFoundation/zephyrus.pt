import {useThemeStore} from "~/store/theme";

export default defineNuxtPlugin(nuxtApp => {
    const theme = useThemeStore();
    theme.init();
})