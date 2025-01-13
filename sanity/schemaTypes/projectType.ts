import { defineField, defineType } from "sanity"

export const projectType = defineType({
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Project Title",
			validation: (rule) => rule.required().error(`Must give a title!`)
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: { source: "title" },
			validation: (rule) => rule.required().error(`Required to generate a page on the website`),
			hidden: ({ document }) => !document?.title
		}),
		defineField({
			name: "thumbnail",
			type: "image",
			title: "Thumbnail Image",
            options: {
               hotspot: true,
            },
			validation: (rule) => rule.required().error(`Must give a thumbnail image!`)
		}),
		defineField({
			name: "orderingNumber",
			type: "number",
			title: "Relative Display Order"
		}),
		defineField({
			name: "content",
			type: "array",
			of: [
				{
					type: "block",
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
							{ title: "Code", value: "code" },
							{ title: "Underline", value: "underline" },
							{ title: "Strike", value: "strike-through" },
							{ title: "Highlight", value: "highlight", icon: () => "H" }
						]
					}
				},
				{ type: "image" }
			]
		})
	]
})
