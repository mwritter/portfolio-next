import { defineField } from "sanity";
import { SchemaType } from "./schemaTypes";

const resume = {
  name: SchemaType.Resume,
  title: "Resume",
  type: "document",
  fields: [
    defineField({
      name: "profile",
      title: "Profile",
      type: "string",
    }),
    defineField({
      name: "workExperience",
      title: "Work Experience",
      type: "array",
      of: [
        {
          type: "document",
          name: "Experience",
          fields: [
            defineField({
              name: "position",
              title: "Position",
              type: "string",
            }),
            defineField({
              name: "date",
              title: "Date",
              type: "string",
            }),
            defineField({
              name: "company",
              title: "Company",
              type: "string",
            }),
            defineField({
              name: "activities",
              title: "Activities",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "technoligies",
      title: "Technoligies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "clients",
      title: "Clients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              title: "Client name",
              name: "name",
              type: "string",
            }),
            defineField({
              title: "Project description",
              name: "description",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "string",
    }),
  ],
};

export default resume;
