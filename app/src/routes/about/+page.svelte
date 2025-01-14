<script lang="ts">
	import { TapedImage, BlockContent } from "$lib";

	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<h2 class="font-pen mb-2 text-4xl font-bold">{data.page.title}</h2>
<div class="flex gap-4">
	<div class="flex-1">
		<BlockContent value={data.page.content} />
	</div>
	<div class="flex max-h-full flex-1 flex-col">
		{#each data.page.images as img}
			<TapedImage src={img} />
		{/each}
	</div>
</div>
