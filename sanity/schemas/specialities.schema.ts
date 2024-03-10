import { defineField } from "sanity";
import { SchemaType } from "./schemaTypes";

const specialities = {
  name: SchemaType.Specialities,
  title: "Specialities",
  type: "document",
  fields: [
    defineField({
      name: "icon",
      title: "Icon name",
      type: "string",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
};

export default specialities;
