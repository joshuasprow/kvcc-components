<script setup lang="ts">
interface Props {
  label: string;
  type: string;
  id: string;
  model: string;
  required: boolean;
  list_id: string;
}

defineProps<Props>();

const classes = [
  "appearance-none",
  "px-3",
  "pb-2",
  "pt-6",
  "bg-white",
  "hover:bg-white",
  "focus:bg-white",
  "border",
  "border-gray-500",
  "hover:border-blue-700",
  "focus:border-blue-700",
  "shadow-sm",
  "rounded",
  "focus:shadow-outline",
  "outline-none",
  "w-full",
  "transition-all",
  "duration-300",
  "ease-in-out",
];

const style = {
  transition: "all 0.25s ease",
};
</script>

<template>
  <div class="relative">
    <label
      :for="id"
      class="
        absolute
        top-0
        left-0
        mb-1
        ml-3
        mt-2
        text-gray-800 text-xs
        font-thin
        pointer-events-none
      "
      >{{ label }}</label
    >
    <input
      v-if="['text', 'search', 'datalist', 'password'].includes(type)"
      :type="type"
      :id="id"
      :name="id"
      :class="classes"
      :list="list_id"
      v-model="model"
      :required="required"
    />
    <select
      v-if="type === 'select'"
      :id="id"
      :name="id"
      :class="classes"
      v-model="model"
    >
      <!-- Allow a slot for options directly if this is a select input. -->
      <slot />
    </select>
  </div>
</template>
