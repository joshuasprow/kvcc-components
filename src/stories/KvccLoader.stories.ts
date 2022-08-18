import { Meta, StoryFn } from "@storybook/vue3";
import KvccLoader from "./KvccLoader.vue";

const meta: Meta<typeof KvccLoader> = {
  title: "Example/KVCC Loader",
  component: KvccLoader,
  argTypes: {
    text: {
      type: { name: "string" },
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvccLoader> = (args) => ({
  components: { KvccLoader },
  setup() {
    return { args };
  },
  template: '<kvcc-loader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};
