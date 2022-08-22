<script setup lang="ts">
import { ref } from "vue";
import KvSiderContent from "./KvSiderContent.vue";
import KvSiderHeader from "./KvSiderHeader.vue";
import KvSiderToggle from "./KvSiderToggle.vue";

const visible = ref(false);

const handleToggle = () => (visible.value = !visible.value);
</script>

<template>
  <KvSiderHeader name="Header" button>Header</KvSiderHeader>
  <KvSiderToggle @toggle="handleToggle">Toggle</KvSiderToggle>
  <KvSiderContent>Content</KvSiderContent>
</template>
