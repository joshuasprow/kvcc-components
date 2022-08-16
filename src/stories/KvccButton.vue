<script lang="ts" setup>
import { withDefaults } from "vue";

interface Props {
  size?: string;
  color: string;
  text: string;
  type?: "button" | "submit" | "reset";
}

withDefaults(defineProps<Props>(), { type: "button" });
</script>

<template>
  <button :type="type" :class="color">
    <span>{{ text }}</span>
  </button>
</template>

<style>
button {
  font-size: 2rem;
  color: white;
  text-shadow: 0 0 0.125rem black;
}

.blue {
  background-color: blue;
  border-color: darkblue;
}

.green {
  background-color: green;
  border-color: darkgreen;
}

.red {
  background-color: red;
  border-color: darkred;
}
</style>
