<script setup lang="ts">
import "../styles/main.css";

defineProps<{ text: string }>();
</script>

<template>
  <figure>
    <i ref="icon"></i>
  </figure>
</template>

<style scoped>
figure {
  --size: 1.5rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

i {
  margin-right: 0.5rem;
  width: var(--size);
  height: var(--size);
  background-color: var(--blue);
  border-radius: 9999px;
  border-width: 4px;
  border-color: var(--blue-dark);
  border-top-color: var(--teal);
  filter: drop-shadow(0 0 0.0625rem var(--teal));
  animation: spin 1s linear infinite;
}
</style>
