import { Meta, StoryFn } from "@storybook/vue3";
import KvccLabeledSelect from "./KvccLabeledSelect.vue";

const meta: Meta = {
  title: "Example/KVCC Labeled Select",
  component: KvccLabeledSelect,
  argTypes: {
    /** the default slot */
    default: {
      type: { name: "string", required: true },
    },

    /** props */
    id: {
      type: { name: "string", required: true },
      defaultValue: "input-1",
    },
    label: {
      type: { name: "string", required: true },
      defaultValue: "Label",
    },
    required: {
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    value: {
      type: { name: "string", required: false },
      defaultValue: "option-2",
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvccLabeledSelect> = (args) => ({
  components: { KvccLabeledSelect },
  setup() {
    return { args };
  },
  template: `<kvcc-labeled-select v-bind="args">
<template v-if="${"default" in args}" v-slot>${args.default}</template>
</kvcc-labeled-select>`,
});

export const Default = Template.bind({});
Default.args = {
  default: `<option value="option-1">option-1</option>
<option value="option-2">option-2</option>
<option value="option-3">option-3</option>`,
  value: "option-2",
};
