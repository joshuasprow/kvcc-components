<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { withDefaults } from "vue";
import { ButtonColor, ButtonType } from "../types/button";
import "../styles/main.css";

interface Props {
  // eslint-disable-next-line vue/require-default-prop
  color?: ButtonColor;
  disabled?: boolean;
  text: string;
  type?: ButtonType;
}

const props = withDefaults(defineProps<Props>(), { type: "button" });

const style = computed(() => ({
  "--bg-color": `var(--${props.color || "primary"})`,
  "--bg-color-hover": `var(--${props.color || "primary"}-dark)`,
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
  color: var(--white);
  background-color: var(--bg-color);
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  line-height: 1;
  border: 1px solid var(--bg-color-hover);
  border-radius: 0.25rem;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 var(--shadow-color);
  padding: 0.75rem 1rem;
}

button:hover,
button:active {
  background-color: var(--bg-color-hover);
  box-shadow: 0 0 0 3px var(--shadow-blue);
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
