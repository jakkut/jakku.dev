<script lang="ts">
	import { PageLayout } from "$lib";
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>Jack Thompson | jakku.dev</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Sedgwick+Ave&family=Shadows+Into+Light&family=Waiting+for+the+Sunrise&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<PageLayout>
	{@render children()}
</PageLayout>
