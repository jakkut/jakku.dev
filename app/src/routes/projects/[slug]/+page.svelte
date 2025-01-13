<script lang="ts">
	import { page } from "$app/state";
	import { PortableText } from "@eirikk/portabletext-2-svelte-5";
	import { UnorderedListWrapper, ListItem, Image, Paragraph, Highlight } from "$lib";

	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<h2 class="font-pen mb-4 text-4xl font-bold">{data.project.title}</h2>
<PortableText
	value={data.project.content}
	components={{
		types: {
			image: Image
		},
        marks: {
            highlight: Highlight,
        },
		block: {
			normal: Paragraph
		},
		list: {
			bullet: UnorderedListWrapper
		},
        listItem: {
            bullet: ListItem,
            normal: ListItem
        }
	}}
/>
