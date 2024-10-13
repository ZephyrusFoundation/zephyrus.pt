<script setup lang="ts">
import {useThemeStore} from "~/store/theme";

const themeStore = useThemeStore();
</script>

<template>
  <div class="dropdown dropdown-end hidden md:inline-block">
    <div tabindex="0" role="button" class="btn m-1 uppercase p-3">
      <IconStack class="w-full h-full" />
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
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