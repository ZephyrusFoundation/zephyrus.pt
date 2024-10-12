<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <nav class="bg-base-200 shadow-lg sticky top-0 z-[90]">
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
        <a :href="localePath('/')" class="avatar w-12 h-12 bg-icon rounded-md">
          <div class="w-full h-full p-1 rounded">
            <IconZephyrus class="w-full h-full fill-icon-content rounded-md"/>
          </div>
        </a>
      </div>
      <div class="navbar-end">
        <label class="grid cursor-pointer place-items-center">
          <svg
              class="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
              class="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <AppThemeToggle />
        <DropdownLanguages />
        <ModalSearchInput />
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>