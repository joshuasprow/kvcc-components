<script setup lang="ts">
defineProps<{ inputId: string; label: string; required?: boolean }>();
</script>

<template>
  <article class="form-control">
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label :for="inputId">
      {{ label }}
      <i v-if="required">*</i>
    </label>
    <slot />
  </article>
</template>

<style>
.form-control {
  position: relative;
}

.form-control label {
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

.form-control i {
  font-style: normal;
  color: var(--red);
}

.form-control input,
.form-control select {
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

.form-control input:hover,
.form-control select:hover {
  background-color: #ffffff;
  border-color: #1d4ed8;
}
</style>
