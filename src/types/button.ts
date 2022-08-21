export enum ButtonColor {
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
}

export const isButtonColor = (value: unknown): value is ButtonColor => {
  if (typeof value !== "string") return false;
  return Object.values(ButtonColor).includes(value as ButtonColor);
};

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export const isButtonType = (value: unknown): value is ButtonType => {
  if (typeof value !== "string") return false;
  return Object.values(ButtonType).includes(value as ButtonType);
};
