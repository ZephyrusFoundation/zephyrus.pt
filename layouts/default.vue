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
      <ul class="menu bg-base-200 min-h-full w-1/3 p-4">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>