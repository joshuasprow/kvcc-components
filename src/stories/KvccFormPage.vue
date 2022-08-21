<script setup lang="ts">
import KvccButton from "./KvccButton.vue";
import KvccForm from "./KvccForm.vue";
import KvccLabeledInput from "./KvccLabeledInput.vue";
import { InputType } from "../types/input";
import { ButtonType } from "../types/button";

const handleSubmit = (data: FormData) => {
  data.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
};
</script>

<template>
  <KvccForm @submit="handleSubmit">
    <KvccLabeledInput label="name" :type="InputType.TEXT" id="name" />
    <KvccLabeledInput label="email" :type="InputType.EMAIL" id="email" />
    <KvccLabeledInput label="message" :type="InputType.TEXT" id="message" />

    <KvccButton text="Send It" :type="ButtonType.SUBMIT" />
  </KvccForm>
</template>
