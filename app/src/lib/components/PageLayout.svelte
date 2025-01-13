<script>
	let { children } = $props();

	const currentDate = new Date();
</script>

<div class="xs:p-4 lg:px-16 lg:py-8">
	<div id="TEMP NOTEBOOK BACKGROUND" class="p-1 pl-0">
		<div class="bg-white">
			<div class="font-pen relative min-h-[4.5rem]">
				<a
					href="/"
					class="xs:bottom-1 xs:text-3xl absolute left-12 font-bold lg:bottom-2 lg:text-4xl"
					>Jack Thompson (jakku)</a
				>
				<p class="text-line-dark xs:hidden absolute bottom-1 right-4 font-sans text-xs lg:inline">
					Date &nbsp;
					<span class="text-pen-color font-pen text-lg">{currentDate.getFullYear()}</span>
					&#x30FB;
					<span class="text-pen-color font-pen text-lg">{currentDate.getMonth() + 1}</span>
					&#x30FB;
					<span class="text-pen-color font-pen text-lg"> {currentDate.getDate()} </span>
				</p>
			</div>
			<div
				class="graph-paper font-pencil xs:min-h-[82vh] relative border-t border-solid px-10 py-4 lg:min-h-[78vh]"
			>
				{#if children}
					{@render children()}
				{/if}
			</div>
			<div class="h-5"></div>
		</div>
	</div>
</div>
