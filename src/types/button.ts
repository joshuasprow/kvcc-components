export const BUTTON_COLOR = ["blue", "green", "red"];

export type ButtonColor = typeof BUTTON_COLOR[number];

export const isButtonColor = (value: unknown): value is ButtonColor => {
  if (typeof value !== "string") return false;
  return BUTTON_COLOR.includes(value);
};
