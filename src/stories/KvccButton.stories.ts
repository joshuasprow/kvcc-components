import { Meta, Story, StoryFn } from "@storybook/vue3";
import KvccButton from "./KvccButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
const meta: Meta<typeof KvccButton> = {
  title: "Example/KVCC Button",
  component: KvccButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: { type: { name: "enum", value: ["blue", "green", "red"] } },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    type: {
      type: { name: "enum", value: ["button", "submit", "reset"] },
    },
  },
};

export default meta;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof KvccButton> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { KvccButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<kvcc-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  color: "red",
  text: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
