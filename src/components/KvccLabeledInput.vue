<script setup lang="ts">
import { computed, ref } from "vue";
import "../styles/main.css";
import { InputType } from "../types/input";
import KvccFormControl from "./KvccFormControl.vue";

interface Props {
  label: string;
  type?: InputType;
  id: string /* required for linking label to input */;
  placeholder?: string;
  required?: boolean;
  listId?: string;
  value?: string;
}

interface Emits {
  (event: "input", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const _value = ref(props.value);

const _type = computed(() => (props.type ? props.type : InputType.TEXT));
const _class = computed(() => ({
  valid: _value.value ? emailRegexp.test(_value.value) : false,
}));

const handleInput = (event: Event) => {
  if (!event.target) {
    console.error("No target found in event");
    return;
  }

  emit("input", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <KvccFormControl :input-id="id" :label="label" :required="required">
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input
      @input="handleInput"
      :class="_class"
      :id="id"
      :list="listId"
      :name="id"
      :placeholder="placeholder"
      :required="required"
      :type="_type"
      v-model="_value"
    />
    <span />
    <slot v-if="_type === InputType.SEARCH" />
  </KvccFormControl>
</template>

<style scoped>
input.valid {
  border-color: var(--green);
}

input.valid:focus {
  border-color: var(--green-light);
}

/* hiding clear button (isn't visible in Firefox anyway) */
input::-webkit-search-cancel-button {
  appearance: none;
}

input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  top: 0;
  right: 1rem;
  bottom: 0;
  /* top: 5px; */
}

input.valid + span::before {
  content: "✓";
  color: var(--green);
}
</style>
