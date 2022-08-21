import { Meta, StoryFn } from "@storybook/vue3";
import KvLoader from "../components/KvLoader.vue";

const meta: Meta<typeof KvLoader> = {
  title: "Example/KVCC Loader",
  component: KvLoader,
  argTypes: {
    text: {
      type: { name: "string" },
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvLoader> = (args) => ({
  components: { KvLoader },
  setup() {
    return { args };
  },
  template: '<kv-loader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};
