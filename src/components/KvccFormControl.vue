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
  margin-bottom: 1rem;
}

.form-control label {
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  color: var(--slate-light);
  font-size: 0.75rem;
  pointer-events: none;
}

.form-control i {
  font-style: normal;
  color: var(--red);
}

.form-control input,
.form-control select {
  appearance: none;
  outline: none;
  padding: 1.5rem 0.75rem 0.5rem 0.75rem;
  background-color: var(--white);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  border-color: var(--slate);
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 2px 4px 0 var(--shadow);
}

.form-control input:focus,
.form-control select:focus {
  border-color: var(--blue);
}
</style>
