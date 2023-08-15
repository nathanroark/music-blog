<script lang="ts">
	export let list: { name: string; selected: boolean }[] = [];
</script>

Cart
<ul>
	{#each list as item, i}
		{#if item.selected}
			<li>
				{item.name}
				<button class="bg-zinc-700" on:click={() => (list[i].selected = false)}
					>Remove from cart</button
				>
			</li>
		{/if}
	{/each}
</ul>

Items
<ul class="w-full overflow-y-auto max-h-[32rem] bg-zinc-900 p-2">
	{#each list as item, i}
		{#if !item.selected}
			<li class="w-full flex justify-between inset-2">
				<button class="p-2 hover:bg-primary-500 w-full" on:click={() => (list[i].selected = true)}
					>{item.name}
				</button>
			</li>
		{/if}
	{/each}
</ul>
