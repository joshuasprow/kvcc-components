import { Meta, StoryFn } from "@storybook/vue3";
import { InputType } from "../types/input";
import KvccLabeledInput from "./KvccLabeledInput.vue";

const meta: Meta = {
  title: "Example/KVCC Labeled Input",
  component: KvccLabeledInput,
  argTypes: {
    /** actions */
    onInput: {},

    /** props */
    id: {
      type: { name: "string", required: true },
      defaultValue: "input-1",
    },
    label: {
      type: { name: "string", required: true },
      defaultValue: "Label",
    },
    listId: {
      type: { name: "string", required: false },
      if: { arg: "type", eq: InputType.SEARCH },
      defaultValue: "list-1",
    },
    placeholder: {
      type: { name: "string", required: false },
      defaultValue: "Placeholder",
    },
    required: {
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    type: {
      type: { name: "enum", required: true, value: Object.values(InputType) },
      defaultValue: InputType.TEXT,
    },
    value: {
      type: { name: "string", required: false },
      defaultValue: "Value",
    },

    /** slots */
    default: {
      if: { arg: "type", eq: InputType.SEARCH },
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvccLabeledInput> = (args) => ({
  components: { KvccLabeledInput },
  setup() {
    return { args };
  },
  template: `<kvcc-labeled-input v-bind="args">
<template v-if="${"default" in args}" v-slot>${args.default}</template>
</kvcc-labeled-input>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Email = Template.bind({});
Email.args = {
  type: InputType.EMAIL,
};

export const Password = Template.bind({});
Password.args = {
  type: InputType.PASSWORD,
};

export const Search = Template.bind({});
Search.args = {
  default: `<datalist id="list-1">
<option value="option-1">option-1</option>
<option value="option-2">option-2</option>
<option value="option-3">option-3</option>
</datalist>`,
  listId: "list-1",
  type: InputType.SEARCH,
  value: "option-2",
};
