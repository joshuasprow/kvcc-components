export enum InputType {
  TEXT = "text",
  SEARCH = "search",
  PASSWORD = "password",
}

export const isInputType = (value: unknown): value is InputType => {
  if (typeof value !== "string") return false;

  return Object.keys(InputType).includes(value as InputType);
};
