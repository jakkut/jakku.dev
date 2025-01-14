<script lang="ts">
	import { PortableText } from "@eirikk/portabletext-2-svelte-5";
	import { UnorderedListWrapper, ListItem, Paragraph, Highlight } from "$lib";

    let value = $props();

    let content = value.value; // TODO: figure out how to avoid this weird syntax;
</script>

<PortableText
	value={content} 
	components={{
		marks: {
			highlight: Highlight
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
