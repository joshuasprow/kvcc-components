<script setup lang="ts">
import { ref } from "vue";
import KvSiderContent from "./KvSiderContent.vue";
import KvSiderHeader from "./KvSiderHeader.vue";
import KvSiderToggle from "./KvSiderToggle.vue";

const visible = ref(false);

const handleVisiblechange = (v: boolean) => {
  console.log({ v });
  visible.value = v;
};

const handleToggle = () => {
  visible.value = !visible.value;
  console.log("toggle", { visible: visible.value });
};
</script>

<template>
  <KvSiderHeader
    name="Header"
    button
    @visiblechange="handleVisiblechange"
    :visible="visible"
  >
    Header
  </KvSiderHeader>
  <KvSiderToggle @toggle="handleToggle">Toggle</KvSiderToggle>
  <KvSiderContent :visible="visible">Content</KvSiderContent>
</template>
