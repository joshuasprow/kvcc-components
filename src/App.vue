<script setup lang="ts">
import { ref } from "vue";

const visible = ref(true);
</script>

<template>
  <button @click="() => (visible = !visible)">
    {{ visible ? "hide" : "show" }}
  </button>
  <transition name="fade" mode="out-in">
    <p v-if="visible">Hi!</p>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
