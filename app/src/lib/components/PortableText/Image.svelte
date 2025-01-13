<script lang="ts">
	import { urlForImage } from "$lib/config/sanity";
	let image = $props();
</script>

<img
	src={urlForImage(image.portableText.value).width(600).url()}
	alt=""
	class="absolute xs:w-96 xs:bottom-36 xs:right-4 md:right-8 xl:bottom-20 xl:right-16 xl:w-auto"
/>
