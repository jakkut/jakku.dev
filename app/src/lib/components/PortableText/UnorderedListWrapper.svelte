<script lang="ts">
	let { children } = $props();
</script>

<ul>
	{#if children}
		{@render children()}
	{/if}
</ul>
