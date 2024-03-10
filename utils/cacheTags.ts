import { SchemaType } from "@/sanity/schemas/schemaTypes";

export const CacheTags = {
  [SchemaType.Intro]: () => SchemaType.Intro,
  [SchemaType.Resume]: () => SchemaType.Resume,
  [SchemaType.Specialities]: () => SchemaType.Specialities,
};
