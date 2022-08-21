import { Args } from "@storybook/csf";
import { Meta, StoryFn } from "@storybook/vue3";
import { InputType } from "../types/input";
import KvccLabeledInput from "./KvccLabeledInput.vue";

interface ArgsWithSlot extends Args {
  default: string;
}

const meta: Meta = {
  title: "Example/KVCC Labeled Input",
  component: KvccLabeledInput,
  argTypes: {
    /** actions */
    onInput: {},

    /** props */
    id: {
      type: { name: "string", required: true },
      defaultValue: "input-1",
    },
    label: {
      type: { name: "string", required: true },
      defaultValue: "label",
    },
    listId: {
      type: { name: "string", required: false },
      if: { arg: "type", eq: InputType.SEARCH },
      defaultValue: "list-1",
    },
    placeholder: {
      type: { name: "string", required: false },
      defaultValue: "placeholder",
    },
    required: {
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    type: {
      type: { name: "enum", required: true, value: Object.values(InputType) },
    },
    value: {
      type: { name: "string", required: false },
    },

    /** slots */
    default: {
      if: { arg: "type", eq: InputType.SEARCH },
    },
  },
};

export default meta;

const argsHaveDefaultSlot = (args: Args): args is ArgsWithSlot => {
  if (!args) return false;

  if (!Object.prototype.hasOwnProperty.call(args, "default")) return false;

  return typeof (args as ArgsWithSlot).default === "string";
};

const buildTemplate = (args: Args): string => {
  const template = (slot: string) =>
    `<kvcc-labeled-input v-bind="args">${slot}</kvcc-labeled-input>`;

  if (argsHaveDefaultSlot(args)) {
    return template(args.default);
  }

  return template("");
};

const Template: StoryFn<typeof KvccLabeledInput> = (args) => ({
  components: { KvccLabeledInput },
  setup: () => ({ args }),
  template: buildTemplate(args),
});

export const Default = Template.bind({});
Default.args = {};

export const Email = Template.bind({});
Email.args = {
  label: "email",
  placeholder: "email@domain.biz",
  type: InputType.EMAIL,
};

export const Password = Template.bind({});
Password.args = {
  label: "password",
  type: InputType.PASSWORD,
};

export const Search = Template.bind({});
Search.args = {
  label: "search",
  listId: "list-1",
  type: InputType.SEARCH,
  value: "option-2",

  default: `<datalist id="list-1">
<option value="option-1">option-1</option>
<option value="option-2">option-2</option>
<option value="option-3">option-3</option>
</datalist>`,
};
