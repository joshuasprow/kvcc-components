import { Meta, StoryFn } from "@storybook/vue3";
import KvHeading from "../components/KvHeading.vue";
import { HEADING_TYPES } from "../types/heading";

const meta: Meta<typeof KvHeading> = {
  title: "Example/KVCC Heading",
  component: KvHeading,
  argTypes: {
    text: {
      type: { name: "string" },
    },
    type: {
      type: { name: "enum", value: HEADING_TYPES as unknown as string[] },
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvHeading> = (args) => ({
  components: { KvHeading },
  setup() {
    return { args };
  },
  template: '<kv-heading v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Default",
  type: "h1",
};
