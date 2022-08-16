import { Meta, StoryFn } from "@storybook/vue3";
import KvccButton from "./KvccButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
const meta: Meta<typeof KvccButton> = {
  title: "Example/KVCC Button",
  component: KvccButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: { type: { name: "string" } },
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

export const Blue = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Blue.args = {
  color: "blue",
  text: "Blue",
};

export const Green = Template.bind({});
Green.args = {
  color: "green",
  text: "Green",
};

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Red.args = {
  color: "red",
  text: "Red",
};
