<script setup lang="ts">
const { locale } = useI18n();
const getLocale = computed(() => {
  let result = locale?.value || 'en';
  if (result.toLowerCase() === 'br') {
    result = 'pt';
  }
  return result;
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <CookieControl :locale="getLocale" />
  </NuxtLayout>
</template>
