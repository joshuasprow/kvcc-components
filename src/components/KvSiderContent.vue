<script setup lang="ts">
// TODO: Figure out how to make Kv*Sider components work together
defineProps<{ visible: boolean }>();
const emit = defineEmits<{ (event: "close"): void }>();

const handleTouchstart = () => emit("close");
</script>

<template>
  <aside @touchstart="handleTouchstart">
    <slot />
  </aside>
</template>

<style>
aside {
  padding: 1rem;

  @media (min-width: 1024px) {
    margin-left: 16rem;
  }
}
</style>
