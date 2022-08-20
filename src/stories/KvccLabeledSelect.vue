<script setup lang="ts">
import "../styles/main.css";
import KvccFormControl from "./KvccFormControl.vue";

interface Props {
  label: string;
  id: string /* required for linking label to input */;
  required?: boolean;
  value?: string;
}

interface Emits {
  (event: "input", value: string): void;
}

defineProps<Props>();

const emit = defineEmits<Emits>();

const handleInput = (event: Event) => {
  if (!event.target) {
    console.error("No target found in event");
    return;
  }

  emit("input", (event.target as HTMLInputElement | HTMLSelectElement).value);
};
</script>

<template>
  <KvccFormControl :input-id="id" :label="label" :required="required">
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <select @input="handleInput" :id="id" :name="id" :value="value">
      <slot />
    </select>
  </KvccFormControl>
</template>
