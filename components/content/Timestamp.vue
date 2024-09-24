<script setup lang="ts">

</script>

<template>
  <div class="flex items-center py-4">
    <div class="flex items-center bg-info text-info-content rounded-md p-3 shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-info-content mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>