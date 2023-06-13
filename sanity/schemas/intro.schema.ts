import { defineField } from "sanity";

const intro = {
  name: "intro",
  title: "Intro",
  type: "document",
  fields: [
    defineField({
      name: "primaryImage",
      title: "Primary",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "secondaryImage",
      title: "Secondary",
      type: "image",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
  ],
};

export default intro;
