import { Meta, StoryFn } from "@storybook/vue3";
import KvButton from "../components/KvButton.vue";
import KvForm from "../components/KvForm.vue";
import KvLabeledInput from "../components/KvLabeledInput.vue";
import KvLabeledSelect from "../components/KvLabeledSelect.vue";
import { InputType } from "../types/input";

const meta: Meta<typeof KvForm> = {
  title: "Example/KVCC Form",
  component: KvForm,
  subcomponents: {
    KvButton,
    KvLabeledInput,
    KvLabeledSelect,
  },
  argTypes: {
    /** actions */
    onSubmit: {},
  },
};

export default meta;

const Template: StoryFn<typeof KvForm> = (args) => ({
  components: { KvButton, KvForm, KvLabeledInput, KvLabeledSelect },
  setup() {
    return { args };
  },
  template: `<kv-form v-bind="args">
  <kv-labeled-input label="Name" id="name" value="Name"></kv-labeled-input>
  <kv-labeled-input label="Email" id="email" type="${InputType.EMAIL}" value="email@domain.example"></kv-labeled-input>
  <kv-labeled-select label="Color" id="color" value="red">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </kv-labeled-select>
  <kv-button type="submit" text="Submit"></kv-button>
</kv-form>`,
});

export const Default = Template.bind({});
Default.args = {};
