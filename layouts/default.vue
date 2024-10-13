<script setup lang="ts">
import usePages from "~/composable/usePages";
const { isModalActive } = useCookieControl();
const { t } = useI18n();
const localePath = useLocalePath();
const pages = usePages();
</script>

<template>
  <div class="drawer">
    <input id="zephyrus-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <AppTheMenu />
      <slot />
      <AppTheFooter />
    </div>
    <div class="drawer-side z-[99]">
      <label for="zephyrus-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="bg-base-200 shadow-2xl min-h-full w-5/6 md:w-1/3 p-4">
        <div class="text-center my-4">
          <a :href="localePath('/')" class="avatar w-14 p-1 bg-icon rounded-md">
            <div class="w-full h-full rounded">
              <IconZephyrus class="w-full h-full fill-icon-content" />
            </div>
          </a>
        </div>
        <li v-for="page in pages" :key="page.path">
          <a :href="localePath(page.path)" class="btn btn-primary w-full my-2" v-if="!page.hide && !page.hideMenu">
            {{ page.name }}
          </a>
        </li>
        <div class="divider divider-neutral md:mt-8"></div>
        <div class="flex flex-wrap flex-row justify-center gap-6">
          <div class="flex flex-wrap flex-row text-center w-full gap-2">
            <DropdownThemes :show-title="true" root-class="dropdown w-full" btn-class="btn btn-accent w-full" dropdown-class="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow" icon-class="h-5 hidden lg:block" />
            <DropdownLanguages :show-title="true" root-class="dropdown w-full" btn-class="btn btn-accent w-full" dropdown-class="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow" flag-class="h-5 hidden lg:block" />
            <button class="btn btn-accent w-full" @click="isModalActive = true">{{ t('footer.cookies') }}</button>
          </div>
          <div class="flex flex-wrap flex-col text-center md:flex-row md:justify-center md:gap-4">
            <a class="p-4 md:p-0" :href="localePath('/legal/tos')">{{ t('footer.termsOfUse') }}</a> <span class="hidden md:block">|</span>
            <a class="p-4 md:p-0" :href="localePath('/legal/cookies')">{{ t('footer.cookiesPolicy') }}</a> <span class="hidden md:block">|</span>
            <a class="p-4 md:p-0" :href="localePath('/legal/privacy')">{{ t('footer.privacyPolicy') }}</a>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>