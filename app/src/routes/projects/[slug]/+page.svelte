<script lang="ts">
	import { TapedImage, BlockContent } from "$lib";

	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<h2 class="font-pen mb-2 text-4xl font-bold">{data.project.title}</h2>
<div class="relative flex min-h-full flex-col gap-4 lg:flex-row">
	<div class="flex-1">
		<BlockContent value={data.project.content} />
	</div>
	<div class="flex-1">
		{#each data.project.screenshots as img}
			<TapedImage src={img} />
		{/each}
	</div>
</div>
