export const HEADING_TYPES = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export type HeadingType = typeof HEADING_TYPES[number];

export const isHeadingType = (type: unknown): type is HeadingType =>
  typeof type === "string" && HEADING_TYPES.includes(type as HeadingType);
