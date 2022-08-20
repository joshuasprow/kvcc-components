<script setup lang="ts">
import { computed } from "@vue/reactivity";
import "../styles/main.css";
import { InputType } from "../types/input";
import KvccFormControl from "./KvccFormControl.vue";

interface Props {
  label: string;
  type?: InputType;
  id: string /* required for linking label to input */;
  required?: boolean;
  listId?: string;
  value?: string;
}

interface Emits {
  (event: "input", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const _type = computed(() => (props.type ? props.type : InputType.TEXT));

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
    <input
      @input="handleInput"
      :type="_type"
      :id="id"
      :name="id"
      :list="listId"
      :required="required"
      :value="value"
    />
    <slot v-if="_type === InputType.SEARCH" />
  </KvccFormControl>
</template>

<style scoped>
input:valid {
  border-color: var(--green-light);
}

input::-webkit-search-cancel-button {
  appearance: none;
}
</style>
