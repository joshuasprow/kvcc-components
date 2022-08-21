import { Meta, StoryFn } from "@storybook/vue3";
import KvccHeading from "../components/KvccHeading.vue";
import { HEADING_TYPES } from "../types/heading";

const meta: Meta<typeof KvccHeading> = {
  title: "Example/KVCC Heading",
  component: KvccHeading,
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

const Template: StoryFn<typeof KvccHeading> = (args) => ({
  components: { KvccHeading },
  setup() {
    return { args };
  },
  template: '<kvcc-heading v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Default",
  type: "h1",
};
