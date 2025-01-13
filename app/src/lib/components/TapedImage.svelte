<script lang="ts">
	interface Props {
		title: string;
		thumbnail: string;
		slug: string;
		class?: string;
	}

	let { title, thumbnail, slug, class: className = "" }: Props = $props();
</script>

<div class="flex justify-items-center"></div>
