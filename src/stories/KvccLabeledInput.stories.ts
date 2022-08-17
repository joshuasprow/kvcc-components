import { Meta, StoryFn } from "@storybook/vue3";
import { INPUT_TYPES } from "../types/input";
import KvccLabeledInput from "./KvccLabeledInput.vue";

const meta: Meta<typeof KvccLabeledInput> = {
  title: "Example/KVCC Labeled Input",
  component: KvccLabeledInput,
  argTypes: {
    label: {
      type: { name: "string" },
      defaultValue: "Label",
    },
    model: {
      type: { name: "string" },
      defaultValue: "Value",
    },
    type: {
      type: { name: "enum", value: INPUT_TYPES },
      defaultValue: INPUT_TYPES[0],
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvccLabeledInput> = (args) => ({
  components: { KvccLabeledInput },
  setup() {
    return { args };
  },
  template: '<kvcc-labeled-input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // text: "Default",
};
