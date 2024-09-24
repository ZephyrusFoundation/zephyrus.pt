<script setup lang="ts">
interface IListItem {
  id: number;
  title: string;
  description: string;
}

defineProps({
  items: {
    type: Array as () => IListItem[],
    required: true,
  },
})
</script>

<template>
  <ul v-if="items.length > 0" class="list-disc list-inside space-y-2">
    <li v-for="item in items" :key="item.id">
      <strong>{{ item.title }}:</strong> {{ item.description }}
    </li>
  </ul>
</template>

<style scoped>

</style>