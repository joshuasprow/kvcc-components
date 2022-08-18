<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <figure>
    <i ref="icon"></i>
    <label>{{ text }}</label>
  </figure>
</template>

<style>
figure {
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  border-width: 4px;
  border-color: #1d4ed8;
  border-top-color: #63b3ed;
  filter: drop-shadow(0 0 0.0625rem #63b3ed);
  animation: spin 1s linear infinite;
}
</style>
