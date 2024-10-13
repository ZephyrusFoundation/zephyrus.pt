<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
});

const getLocale = (code: string) => {
  return locales.value.find((loc) => loc.code === code)
};
</script>

<template>
  <div class="dropdown dropdown-end hidden md:inline-block">
    <div tabindex="0" role="button" class="btn m-1">
      <IconFlagsGetFlag :code="getLocale(locale).country" />
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <li v-for="locale in availableLocales" :key="locale.code">
        <NuxtLink :to="switchLocalePath(locale.code)">
          <IconFlagsGetFlag :code="getLocale(locale.code).country" classes="w-full h-3" />
          <span>{{ locale.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>