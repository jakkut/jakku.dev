<script lang="ts">
	import type { MarkComponentProps } from "@eirikk/portabletext-2-svelte-5";

	let { children } = $props();

    let portableText: MarkComponentProps;
</script>

<span class="bg-blue-700">
	{#if children}
		{@render children()}
	{/if}
</span>
