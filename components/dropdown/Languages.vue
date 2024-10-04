<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="dropdown dropdown-end ">
    <div tabindex="0" role="button" class="btn m-1">Click</div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <li v-for="locale in availableLocales" :key="locale.code">
        <a :href="switchLocalePath(locale.code)">
          <div class="badge badge-outline badge-sm">{{ locale.language }}</div>
          <span>{{ locale.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>