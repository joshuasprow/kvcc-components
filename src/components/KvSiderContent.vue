<script setup lang="ts">
const emit = defineEmits<{ (event: "close"): void }>();

const handleTouchstart = () => emit("close");
</script>

<template>
  <div class="p-4 lg:ml-64" @touchstart="handleTouchstart">
    <slot />
  </div>
</template>
