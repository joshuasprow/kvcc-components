<script setup lang="ts">
const emit = defineEmits<{ (event: "toggle"): void }>();

const handleClick = () => emit("toggle");
</script>

<template>
  <figure
    @click="handleClick"
    aria-hidden="true"
    title="Show or Hide the Site Header"
  >
    <slot />
  </figure>
</template>

<style scoped>
figure {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  margin: 0.75rem;
  background-color: #f3f4f6;
  font-size: 1.125rem;
  line-height: 1.75rem;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  border-width: 1px;
  border-color: #9ca3af;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>
