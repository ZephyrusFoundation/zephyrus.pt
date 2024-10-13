<script setup lang="ts">
import {useThemeStore} from "~/store/theme";

withDefaults(defineProps<{
  showTitle?: boolean;
  rootClass?: string;
  dropdownClass?: string;
  btnClass?: string;
  iconClass?: string;
}>(), {
  showTitle: false,
  rootClass: 'dropdown dropdown-end hidden md:inline-block',
  dropdownClass: 'dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow',
  btnClass: 'btn m-1 p-3',
  iconClass: 'w-full h-full'
});

const themeStore = useThemeStore();
</script>

<template>
  <div :class="rootClass">
    <div tabindex="0" role="button" :class="btnClass">
      <IconStack :class="iconClass" />
      <span v-if="showTitle">
        {{ $t('dropdown.themes') }}
      </span>
    </div>
    <ul tabindex="0" :class="dropdownClass">
      <li v-for="theme in themeStore.AVAILABLE_THEMES" :key="theme" class="my-1">
        <button @click="themeStore.setTheme(theme)" class="btn btn-md shadow-2xl" :data-theme="theme" :disabled="theme === themeStore.theme">
          <IconCheck class="w-4 h-4" v-if="theme === themeStore.theme" />
          <span class="flex-grow text-sm capitalize">
            {{ theme }}
          </span>
          <span class="flex h-full p-1.5 shrink-0 flex-wrap gap-1">
            <span class="bg-primary rounded-badge w-2"></span>
            <span class="bg-secondary rounded-badge w-2"></span>
            <span class="bg-accent rounded-badge w-2"></span>
            <span class="bg-neutral rounded-badge w-2"></span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>