<svelte:options runes={true} />

<script lang="ts">
	import { functionReadActiveMenuStore } from '$lib/stores/storeActiveMenu.js';
	import { functionReadExpandedMenuStore } from '$lib/stores/storeExpandedMenu.js';
	import { functionReadMobileMenuStore } from '$lib/stores/storeMobileMenu.js';
	import type { typeMenuWithoutSubmenus } from '$lib/types/typeSidebarData.js';

	let {
		propData,
	}: {
		propData: typeMenuWithoutSubmenus<string>;
	} = $props();

	const storeMobileMenu = functionReadMobileMenuStore();
	const storeActiveMenu = functionReadActiveMenuStore();
	const storeExpandedMenu = functionReadExpandedMenuStore();
</script>

<li
	class="mb-0.5 rounded-xl px-3 py-2 last:mb-0"
	class:bg-gradient-to-r={$storeActiveMenu === propData.stringName}
	class:from-[#fcb69f]={$storeActiveMenu === propData.stringName}
	class:to-[#ffecd2]={$storeActiveMenu === propData.stringName}
>
	<a
		class="block transition duration-150"
		href={propData.stringHref}
		class:text-slate-200={$storeActiveMenu !== propData.stringName}
		class:text-black={$storeActiveMenu === propData.stringName}
		target={propData.stringTarget}
		onclick={() => {
			$storeMobileMenu = false;
			$storeActiveMenu = propData.stringName;
			$storeExpandedMenu = '';
		}}
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html propData.stringIcon ?? ''}
				<div
					class="ml-2 text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
				>
					{propData.stringText}
				</div>
			</div>
			{#if propData.stringBadge !== undefined}
				<div class="flex ml-2">
					<span
						class:text-white={$storeActiveMenu === propData.stringName}
						class:bg-slate-800={$storeActiveMenu === propData.stringName}
						class:text-slate-700={$storeActiveMenu !== propData.stringName}
						class:bg-slate-100={$storeActiveMenu !== propData.stringName}
						class="inline-flex items-center justify-center h-5 px-2 text-xs font-medium rounded"
					>
						{propData.stringBadge}
					</span>
				</div>
			{/if}
		</div></a
	>
</li>
