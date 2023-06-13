import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "6rurbmv4",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2023-05-13",
  basePath: "/studio",
  plugins: [deskTool()],
});

export default config;
