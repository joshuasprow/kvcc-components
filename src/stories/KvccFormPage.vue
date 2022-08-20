<script setup lang="ts">
import KvccButton from "./KvccButton.vue";
import KvccForm from "./KvccForm.vue";
import KvccLabeledInput from "./KvccLabeledInput.vue";

const handleSubmit = (data: FormData) => {
  data.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
};
</script>

<template>
  <KvccForm @submit="handleSubmit">
    <KvccLabeledInput label="name" type="text" id="name" />
    <KvccLabeledInput label="email" type="text" id="email" />
    <KvccLabeledInput label="message" type="text" id="message" />

    <KvccButton text="Send It" type="submit" />
  </KvccForm>
</template>
