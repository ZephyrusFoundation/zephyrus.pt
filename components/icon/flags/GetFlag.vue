<script setup lang="ts">
const props = withDefaults(defineProps<{
  code: string;
  classes?: string;
}>(), {
  classes: 'w-full h-5'
});
</script>

<template>
  <IconFlagsBr v-if="code === 'br'" :class="classes" />
  <IconFlagsEs v-if="code === 'es'" :class="classes" />
  <IconFlagsNl v-if="code === 'nl'" :class="classes" />
  <IconFlagsPt v-if="code === 'pt'" :class="classes" />
  <IconFlagsUs v-if="code === 'us'" :class="classes" />
</template>

<style scoped>

</style>