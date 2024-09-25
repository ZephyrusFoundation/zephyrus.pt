<script setup lang="ts">
import usePages from "~/composable/usePages";

const { t } = useI18n();
const localePath = useLocalePath();
const pages = usePages();
</script>

<template>
  <div class="drawer">
    <input id="zephyrus-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <AppTheMenu />
      <main>
        <slot />
      </main>
      <AppTheFooter />
    </div>
    <div class="drawer-side">
      <label for="zephyrus-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="bg-base-200 min-h-full w-5/6 md:w-1/3 p-4">
        <div class="text-center">
          <a :href="localePath('/')" class="avatar w-16 h-16">
            <div class="w-full h-full rounded">
              <IconZephyrus class="w-full h-full" />
            </div>
          </a>
        </div>
        <li v-for="page in pages" :key="page.path">
          <a :href="localePath(page.path)" class="btn w-full" v-if="!page.hide && !page.hideMenu">
            {{ page.name }}
          </a>
        </li>
        <div class="flex flex-wrap flex-col text-center md:flex-row md:justify-center md:gap-4 md:pt-12">
          <a class="p-4 md:p-0" :href="localePath('/legal/tos')">{{ t('footer.termsOfUse') }}</a> <span class="hidden md:block">|</span>
          <a class="p-4 md:p-0" :href="localePath('/legal/cookies')">{{ t('footer.cookiesPolicy') }}</a> <span class="hidden md:block">|</span>
          <a class="p-4 md:p-0" :href="localePath('/legal/privacy')">{{ t('footer.privacyPolicy') }}</a>
        </div>
      </ul>
    </div>
  </div>
</template>