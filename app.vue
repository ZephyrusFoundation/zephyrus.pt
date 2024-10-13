<script setup lang="ts">
const { locale } = useI18n();
const getLocale = computed(() => parseLocale(locale?.value));
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <CookieControl :locale="getLocale" />
  </NuxtLayout>
</template>
