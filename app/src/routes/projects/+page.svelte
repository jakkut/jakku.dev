<script lang="ts">
	import type { PageData } from "./$types";
	import { ProjectPreview } from "$lib";

	let { data }: { data: PageData } = $props();
</script>

<h2 class="font-pen mb-2 text-4xl font-bold">Projects</h2>
<div
	class="xs:grid-cols-1 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-6 xl:grid-cols-4"
>
	{#each data.projects as project}
		<ProjectPreview
			title={project.title}
			thumbnail={project.thumbnail}
			slug={project.slug}
			class="flex items-center justify-center"
		/>
	{/each}
</div>
