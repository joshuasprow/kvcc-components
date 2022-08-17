<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { withDefaults } from "vue";

interface Props {
  color?: "blue" | "green" | "red";
  disabled?: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), { type: "button" });

const colors = computed(() => {
  switch (props.color) {
    case "blue":
      return ["#1d4ed8", "#1e40af"];
    case "green":
      return ["#047857", "#065f46"];
    case "red":
      return ["#b91c1c", "#991b1b"];
    default:
      return ["#334155", "#1e293b"];
  }
});

const style = computed(() => ({
  "--bg-color": colors.value[0],
  "--bg-color-hover": colors.value[1],
}));
</script>

<template>
  <button
    :aria-disabled="disabled"
    :type="type"
    :class="color"
    :disabled="disabled"
    :style="style"
  >
    <span>{{ text }}</span>
  </button>
</template>

<style>
button {
  color: white;
  background-color: var(--bg-color);
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  line-height: 1;
  border: 1px solid var(--bg-color-hover);
  border-radius: 0.25rem;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.75rem 1rem;
}

button:hover,
button:active {
  background-color: var(--bg-color-hover);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

button[disabled]:hover,
button[disabled]:active {
  background-color: var(--bg-color);
  box-shadow: none;
}
</style>
