<script lang="ts">
	import { urlForImage } from "$lib/config/sanity";
	let asset = $props();
</script>

<div class="relative w-[95%]">
    <div class="tape top-[-1em] right-[-2em] rotate-[40deg] w-[5.5em]"></div>
    <div class="tape bottom-[-1em] left-[-2em] rotate-[50deg] w-[4.5em]"></div>
	<img src={urlForImage(asset.src).url()} alt="" class="flex-shrink drop-shadow-[-1px_-1px_4px_rgba(0,0,0,0.1)] h-full object-fit" />
</div>
