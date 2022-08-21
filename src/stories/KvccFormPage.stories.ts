import { Meta, StoryFn } from "@storybook/vue3";
import KvccFormPage from "../components/KvccFormPage.vue";

const meta: Meta<typeof KvccFormPage> = {
  title: "Example/KVCC Form Page",
  component: KvccFormPage,
  argTypes: {
    /** actions */
    onSubmit: {},
  },
};

export default meta;

const Template: StoryFn<typeof KvccFormPage> = (args) => ({
  components: { KvccFormPage },
  setup() {
    return { args };
  },
  template: '<kvcc-form-page v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
