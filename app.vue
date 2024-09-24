<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <CookieControl :locale />
  </NuxtLayout>
</template>
