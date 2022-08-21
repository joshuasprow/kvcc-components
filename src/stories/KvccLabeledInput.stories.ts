import { Meta, StoryFn } from "@storybook/vue3";
import KvLabeledInput from "../components/KvLabeledInput.vue";
import { buildTemplate } from "../lib/stories";
import { InputType } from "../types/input";

const meta: Meta = {
  title: "Example/KVCC Labeled Input",
  component: KvLabeledInput,
  argTypes: {
    /** actions */
    onInput: {},

    /** props */
    id: {
      type: { name: "string", required: true },
    },
    label: {
      type: { name: "string", required: true },
      defaultValue: "label",
    },
    listId: {
      type: { name: "string", required: false },
      if: { arg: "type", eq: InputType.SEARCH },
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
      defaultValue: InputType.TEXT,
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

const Template: StoryFn<typeof KvLabeledInput> = (args) => ({
  components: { KvLabeledInput },
  setup: () => ({ args }),
  template: buildTemplate("kv-labeled-input", args),
});

export const Default = Template.bind({});
Default.args = {
  id: "default",
};

export const Email = Template.bind({});
Email.args = {
  id: "email",
  label: "email",
  placeholder: "email@domain.biz",
  type: InputType.EMAIL,
};

export const Password = Template.bind({});
Password.args = {
  id: "password",
  label: "password",
  type: InputType.PASSWORD,
};

export const Search = Template.bind({});
Search.args = {
  id: "search",
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
