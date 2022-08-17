import { Meta, StoryFn } from "@storybook/vue3";
import KvccLabeledInput from "./KvccLabeledInput.vue";

const meta: Meta<typeof KvccLabeledInput> = {
  title: "Example/KVCC Labeled Input",
  component: KvccLabeledInput,
  argTypes: {},
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
