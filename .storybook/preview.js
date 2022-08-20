import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withSource } from "./with-source";

export const decorators = [withSource];

/** @type {import("@storybook/vue3").Parameters} */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
