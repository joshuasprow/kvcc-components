import { Meta, StoryFn } from "@storybook/vue3";
import { BUTTON_COLOR, BUTTON_TYPE } from "../types/button";
import KvccButton from "./KvccButton.vue";

const meta: Meta<typeof KvccButton> = {
  title: "Example/KVCC Button",
  component: KvccButton,
  argTypes: {
    color: {
      type: { name: "enum", value: BUTTON_COLOR as any },
    },
    disabled: {
      type: { name: "boolean" },
      defaultValue: false,
    },
    onClick: {},
    type: {
      type: { name: "enum", value: BUTTON_TYPE as any },
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvccButton> = (args) => ({
  components: { KvccButton },
  setup() {
    return { args };
  },
  template: '<kvcc-button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};

export const Blue = Template.bind({});
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
Red.args = {
  color: "red",
  text: "Red",
};
