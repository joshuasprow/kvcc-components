export const BUTTON_COLOR = ["blue", "green", "red"] as const;

export type ButtonColor = typeof BUTTON_COLOR[number];

export const isButtonColor = (value: unknown): value is ButtonColor => {
  if (typeof value !== "string") return false;
  return BUTTON_COLOR.includes(value as ButtonColor);
};

export const BUTTON_TYPE = ["button", "submit", "reset"] as const;

export type ButtonType = typeof BUTTON_TYPE[number];

export const isButtonType = (value: unknown): value is ButtonType => {
  if (typeof value !== "string") return false;
  return BUTTON_TYPE.includes(value as ButtonType);
};
