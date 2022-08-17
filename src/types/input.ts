export const INPUT_TYPES = [
  "text",
  "search",
  "datalist",
  "password",
  "select",
] as const;

export type InputType = typeof INPUT_TYPES[number];

export const isInputType = (value: unknown): value is InputType => {
  if (typeof value !== "string") return false;
  return INPUT_TYPES.includes(value as InputType);
};
