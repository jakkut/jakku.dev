<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="relative h-[70vh]">
	<div class="absolute left-2/4 top-[40%] translate-x-[-50%] translate-y-[-50%] text-center font-graffiti">
		<div class="text-5xl mb-8">{page.status}</div>
        <div class="text-2xl">
        {#if page.status === 404}
            Sorry! I may have ripped out a page or two...
        {:else}
            {page.error!.message}
        {/if}
        </div>
    </div>
</div>
