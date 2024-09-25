<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <nav class="bg-base-200 shadow-lg sticky top-0 z-[99]">
    <div class="navbar container mx-auto">
      <div class="navbar-start">
        <label for="zephyrus-drawer" aria-label="open sidebar" class="btn btn-circle bg-base-300">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="swap-off fill-current w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
      </div>
      <div class="navbar-center">
        <a :href="localePath('/')" class="avatar w-12 h-12">
          <div class="w-full h-full rounded">
            <IconZephyrus class="w-full h-full" />
          </div>
        </a>
      </div>
      <div class="navbar-end">
        <ModalSearchInput />
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>