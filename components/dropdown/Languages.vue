<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

withDefaults(defineProps<{
  showTitle?: boolean;
  rootClass?: string;
  dropdownClass?: string;
  btnClass?: string;
  flagClass?: string;
}>(), {
  showTitle: false,
  rootClass: 'dropdown dropdown-end hidden md:inline-block',
  dropdownClass: 'dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow',
  btnClass: 'btn m-1',
  flagClass: 'w-full h-5',
});

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
});

const getLocale = (code: string) => {
  return locales.value.find((loc) => loc.code === code)
};
</script>

<template>
  <div :class="rootClass">
    <button tabindex="0" role="button" :class="btnClass">
      <IconFlagsGetFlag :code="getLocale(locale).country" :classes="flagClass" />
      <span v-if="showTitle">
        {{ $t('dropdown.languages') }}
      </span>
    </button>
    <ul tabindex="0" :class="dropdownClass">
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