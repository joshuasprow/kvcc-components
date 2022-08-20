<script setup lang="ts">
import "../styles/main.css";
import type { InputType } from "../types/input";

interface Props {
  label: string;
  type?: InputType;
  id: string;
  required?: boolean;
  listId?: string;
}

defineProps<Props>();

const emit = defineEmits(["change", "input", "select"]);

const emitEvent = (kind: Parameters<typeof emit>[0], event: Event) => {
  if (!event.target) {
    console.error("No target found in event");
    return;
  }

  emit(kind, (event.target as HTMLInputElement | HTMLSelectElement).value);
};

const handleChange = (event: Event) => emitEvent("change", event);
const handleInput = (event: Event) => emitEvent("input", event);
const handleSelect = (event: Event) => emitEvent("select", event);
</script>

<template>
  <article class="labeled-input">
    <label :for="id">{{ label }}</label>
    <input
      v-if="type && ['text', 'search', 'datalist', 'password'].includes(type)"
      @change="handleChange"
      @input="handleInput"
      :type="type"
      :id="id"
      :name="id"
      :list="listId"
      :required="required"
    />
    <select
      v-else-if="type === 'select'"
      @change="handleChange"
      @select="handleSelect"
      :id="id"
      :name="id"
    >
      <!-- Allow a slot for options directly if this is a select input. -->
      <slot />
    </select>
  </article>
</template>

<style>
article {
  position: relative;
}

label {
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 0.25rem;
  margin-top: 0.5rem;
  margin-left: 0.75rem;
  color: #1f2937;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 100;
  pointer-events: none;
}

input,
select {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-top: 1.5rem;
  background-color: #ffffff;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #6b7280;
  appearance: none;
  outline: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

input:hover,
select:hover {
  background-color: #ffffff;
  border-color: #1d4ed8;
}
</style>
