import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemaTypes"

export default defineConfig({
	name: "default",
	title: "jakku.dev",

	projectId: "sg4s22il",
	dataset: "production",

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes
	}
})
