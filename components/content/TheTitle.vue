<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  number: {
    type: String,
    default: null,
  }
})
</script>

<template>
  <div class="flex items-center mt-3 py-4">
    <h2 class="text-2xl font-semibold text-base-content">
      <span v-if="number">{{ number }}.</span>
      {{ title }}
    </h2>
  </div>
</template>

<style scoped>

</style>