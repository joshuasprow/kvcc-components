import { Args } from "@storybook/vue3";

interface ArgsWithSlot extends Args {
  default: string;
}

type ComponentName = `kv-${string}`;

const argsHaveDefaultSlot = (args: Args): args is ArgsWithSlot => {
  if (!args) return false;

  if (!Object.prototype.hasOwnProperty.call(args, "default")) return false;

  return typeof (args as ArgsWithSlot).default === "string";
};

/**
 * builds a template string for the story component. pass a kebab-cased name of the component.
 */
export const buildTemplate = (component: ComponentName, args: Args): string => {
  const template = (slot: string) =>
    `<${component} v-bind="args">${slot}</${component}>`;

  if (argsHaveDefaultSlot(args)) {
    return template(args.default);
  }

  return template("");
};
