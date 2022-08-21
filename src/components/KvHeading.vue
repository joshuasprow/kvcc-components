<script setup lang="ts">
import { HeadingType } from "../types/heading";
import "../styles/main.css";

defineProps<{ type: HeadingType; text: string }>();
</script>

<template>
  <component :is="type" class="font-bold">{{ text }}</component>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}

h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

h2 {
  font-size: 1.5rem;
  line-height: 2rem;
}

h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

h4 {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

h5 {
  font-size: 1rem;
  line-height: 1.5rem;
}

h6 {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
