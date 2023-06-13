import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import intro from "./sanity/schemas/intro.schema";
import schema from "./sanity/schemas";

const config = defineConfig({
  projectId: "6rurbmv4",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2023-05-13",
  basePath: "/studio",
  plugins: [deskTool()],
  schema,
});

export default config;
