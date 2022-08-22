import { Meta, StoryFn } from "@storybook/vue3";
import KvButton from "../components/KvButton.vue";
import { ButtonType } from "../types/button";
import { Color } from "../types/colors";

const meta: Meta<typeof KvButton> = {
  title: "Example/KVCC Button",
  component: KvButton,
  argTypes: {
    color: {
      type: { name: "enum", value: Object.values(Color) },
      defaultValue: "",
    },
    disabled: {
      type: { name: "boolean" },
      defaultValue: false,
    },
    onClick: {},
    type: {
      type: { name: "enum", value: Object.values(ButtonType) },
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvButton> = (args) => ({
  components: { KvButton },
  setup() {
    return { args };
  },
  template: '<kv-button v-bind="args" />',
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
