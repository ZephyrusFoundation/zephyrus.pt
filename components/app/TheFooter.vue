<script setup lang="ts">
import useSystem from "~/composable/useSystem";
const { t } = useI18n();
const system = useSystem();
const localePath = useLocalePath();

const getYear = () => {
  const foundationYear = new Date(system.value.foundation).getFullYear();
  const currentYear = new Date().getFullYear();

  return foundationYear === currentYear
    ? currentYear
    : `${foundationYear} - ${currentYear}`;
};
</script>

<template>
  <footer>
    <div class="bg-base-300 text-base-content">
      <div class="footer items-center p-4 container mx-auto">
        <aside class="grid-flow-col items-center">
          <a :href="localePath('/')" class="avatar w-8 h-8">
            <IconZephyrus giclass="w-full h-full" />
          </a>
          <p>{{ t('footer.copyright', { year: getYear(), name: system.name }) }}</p>
        </aside>
        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a :href="localePath('/legal/tos')">{{ t('footer.termsOfUse') }}</a> |
          <a :href="localePath('/legal/cookies')">{{ t('footer.cookiesPolicy') }}</a> |
          <a :href="localePath('/legal/privacy')">{{ t('footer.privacyPolicy') }}</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>