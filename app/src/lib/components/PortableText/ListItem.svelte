<script lang="ts">
	let { children } = $props();
</script>

<li class="text-xl">
	{#if children}
		- {@render children()}
	{/if}
</li>
