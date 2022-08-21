import { Meta, StoryFn } from "@storybook/vue3";
import KvLabeledSelect from "../components/KvLabeledSelect.vue";
import { buildTemplate } from "../lib/stories";

const meta: Meta = {
  title: "Example/KVCC Labeled Select",
  component: KvLabeledSelect,
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
    required: {
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    value: {
      type: { name: "string", required: false },
      defaultValue: "option-2",
    },

    /** slots */
    default: {
      type: { name: "string", required: true },
    },
  },
};

export default meta;

const Template: StoryFn<typeof KvLabeledSelect> = (args) => ({
  components: { KvLabeledSelect },
  setup: () => ({ args }),
  template: buildTemplate("kv-labeled-select", args),
});

export const Default = Template.bind({});
Default.args = {
  default: `<option value="option-1">option-1</option>
<option value="option-2">option-2</option>
<option value="option-3">option-3</option>`,
  value: "option-2",
};
