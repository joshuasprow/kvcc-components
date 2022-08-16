<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { withDefaults } from "vue";

interface Props {
  size?: string;
  // TODO: figure out storybook warning
  // Addon controls: Control of type color only supports string, received "enum" instead
  color: "string";
  text: string;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), { type: "button" });

const cssVars = computed(() => ({ "--button-color": props.color }));
</script>

<template>
  <button :type="type" :class="color" :style="cssVars">
    <span>{{ text }}</span>
  </button>
</template>

<style>
:root {
  --font-size: 2rem;
  --shadow-color: #444;
  --shadow-size: calc(var(--font-size) * 0.25);
}

button {
  background-color: var(--button-color);
  font-size: var(--font-size);
  color: white;
  text-shadow: 0 0 var(--shadow-size) var(--shadow-color);
}
/* 
.blue {
  background-color: blue;
  border-color: var(--shadow-color);
}

.green {
  background-color: green;
  border-color: var(--shadow-color);
}

.red {
  background-color: red;
  border-color: var(--shadow-color);
} */
</style>
