import { defineField, defineType } from "sanity"

const bioType = defineType({
	name: "bio",
	title: "About Me Page",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Page Title",
			validation: (rule) => rule.required().error(`Must give a title!`)
		}),
		defineField({
			name: "images",
			type: "array",
			title: "Page Images",
			of: [
				{
					type: "image",
					options: {
						hotspot: true
					}
				}
			],
			options: {
				sortable: true
			},
			validation: (rule) => rule.required().error(`Must give at least one valid preview image!`)
		}),
		defineField({
			name: "content",
			type: "array",
            title: "Page Content",
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
				}
			]
		})
	]
})

export default bioType
