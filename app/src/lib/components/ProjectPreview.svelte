<script lang="ts">
    import { urlForImage } from "$lib/config/sanity";
	interface Props {
		title: string;
		thumbnail: string;
		slug: string;
		class?: string;
	}

	let { title, thumbnail, slug, class: className = "" }: Props = $props();
</script>

<div class={`${className}`}>
	<a
		href="/projects/{slug}"
		class={`h-min w-min bg-white px-6 py-6 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}
	>
		<div class="h-56 w-56 bg-black">
			<img
				src={urlForImage(thumbnail).url()}
				alt={`Thumbnail image for ${title}`}
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="text-md flex h-10 items-center justify-center pt-4 text-center">
			<p class="font-pen m text-2xl">{title}</p>
		</div>
	</a>
</div>
