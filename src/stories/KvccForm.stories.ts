import { Meta, StoryFn } from "@storybook/vue3";
import KvccButton from "../components/KvccButton.vue";
import KvccForm from "../components/KvccForm.vue";
import KvccLabeledInput from "../components/KvccLabeledInput.vue";
import KvccLabeledSelect from "../components/KvccLabeledSelect.vue";
import { InputType } from "../types/input";

const meta: Meta<typeof KvccForm> = {
  title: "Example/KVCC Form",
  component: KvccForm,
  subcomponents: {
    KvccButton,
    KvccLabeledInput,
    KvccLabeledSelect,
  },
  argTypes: {
    /** actions */
    onSubmit: {},
  },
};

export default meta;

const Template: StoryFn<typeof KvccForm> = (args) => ({
  components: { KvccButton, KvccForm, KvccLabeledInput, KvccLabeledSelect },
  setup() {
    return { args };
  },
  template: `<kvcc-form v-bind="args">
  <kvcc-labeled-input label="Name" id="name" value="Name"></kvcc-labeled-input>
  <kvcc-labeled-input label="Email" id="email" type="${InputType.EMAIL}" value="email@domain.example"></kvcc-labeled-input>
  <kvcc-labeled-select label="Color" id="color" value="red">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </kvcc-labeled-select>
  <kvcc-button type="submit" text="Submit"></kvcc-button>
</kvcc-form>`,
});

export const Default = Template.bind({});
Default.args = {};
