export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  SEARCH = "search",
}

export const isInputType = (value: unknown): value is InputType => {
  if (typeof value !== "string") return false;

  return Object.keys(InputType).includes(value as InputType);
};
