<script setup lang="ts">
import "../styles/main.css";

export interface Field {
  name: string;
  value: string | number;
}

const emit = defineEmits<{ (event: "submit", data: FormData): void }>();

const handleSubmit = (event: Event) => {
  const data = new FormData(event.target as HTMLFormElement);

  emit("submit", data);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <slot />
  </form>
</template>

<style>
.labeled-input {
  margin-bottom: 1rem;
}
</style>
