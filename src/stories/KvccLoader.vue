<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <figure>
    <i ref="icon"></i>
    <label>{{ text }}</label>
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
  background-color: #1d4ed8;
  border-radius: 9999px;
  border-width: 4px;
  border-color: #1d4ed8;
  border-top-color: #63b3ed;
  filter: drop-shadow(0 0 0.0625rem #63b3ed);
  animation: spin 1s linear infinite;
}
</style>
