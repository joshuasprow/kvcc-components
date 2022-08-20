export enum InputType {
  TEXT = "text",
  SEARCH = "search",
  PASSWORD = "password",
  SELECT = "select",
}

export const isInputType = (value: unknown): value is InputType => {
  if (typeof value !== "string") return false;

  return Object.keys(InputType).includes(value as InputType);
};
