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
  (event: "blur" | "select", value: string): void;
}

defineProps<Props>();

const emit = defineEmits<Emits>();

const emitEvent = (kind: Parameters<typeof emit>[0], event: Event) => {
  if (!event.target) {
    console.error("No target found in event");
    return;
  }

  emit(kind, (event.target as HTMLInputElement | HTMLSelectElement).value);
};

const handleBlur = (event: Event) => emitEvent("blur", event);
const handleSelect = (event: Event) => emitEvent("select", event);
</script>

<template>
  <KvccFormControl :input-id="id" :label="label" :required="required">
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <select
      @blur="handleBlur"
      @select="handleSelect"
      :id="id"
      :name="id"
      :value="value"
    >
      <slot />
    </select>
  </KvccFormControl>
</template>
