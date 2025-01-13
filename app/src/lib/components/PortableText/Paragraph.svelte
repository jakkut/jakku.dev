<script lang="ts">
	let { children } = $props();
</script>

<p class="text-2xl">
	{#if children}
		{@render children()}
	{/if}
</p>
