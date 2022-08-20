import { Meta, StoryFn } from "@storybook/vue3";
import { InputType } from "../types/input";
import KvccLabeledInput from "./KvccLabeledInput.vue";

const meta: Meta<typeof KvccLabeledInput> = {
  title: "Example/KVCC Labeled Input",
  component: KvccLabeledInput,
  argTypes: {
    id: { name: "string", defaultValue: "input" },
    label: {
      type: { name: "string" },
      defaultValue: "Label",
    },
    model: {
      type: { name: "string" },
      defaultValue: "Value",
    },
    type: {
      type: { name: "enum", value: InputType as unknown as string[] },
      defaultValue: InputType.TEXT,
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
