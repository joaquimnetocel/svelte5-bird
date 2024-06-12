<script lang="ts">
	import type { typeMenuWithoutSubmenus } from '$lib/types/typeSidebarData.js';
	import { functionReadActiveMenuStore } from '../../stores/storeActiveMenu.js';
	import { functionReadExpandedMenuStore } from '../../stores/storeExpandedMenu.js';
	import { functionReadMobileMenuStore } from '../../stores/storeMobileMenu.js';

	export let propActiveMenu: string | undefined = undefined;
	export let propData: typeMenuWithoutSubmenus<string>;

	const storeMobileMenu = functionReadMobileMenuStore();
	const storeActiveMenu = functionReadActiveMenuStore();
	const storeExpandedMenu = functionReadExpandedMenuStore();
</script>

<li
	class="mb-0.5 rounded-xl px-3 py-2 last:mb-0"
	class:bg-gradient-to-r={propActiveMenu === propData.stringName}
	class:from-[#fcb69f]={propActiveMenu === propData.stringName}
	class:to-[#ffecd2]={propActiveMenu === propData.stringName}
>
	<a
		class="block transition duration-150"
		href={propData.stringHref}
		class:text-slate-200={propActiveMenu !== propData.stringName}
		class:text-black={propActiveMenu === propData.stringName}
		target={propData.stringTarget}
		on:click={() => {
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
						class:text-white={propActiveMenu === propData.stringName}
						class:bg-slate-800={propActiveMenu === propData.stringName}
						class:text-slate-700={propActiveMenu !== propData.stringName}
						class:bg-slate-100={propActiveMenu !== propData.stringName}
						class="inline-flex items-center justify-center h-5 px-2 text-xs font-medium rounded"
					>
						{propData.stringBadge}
					</span>
				</div>
			{/if}
		</div></a
	>
</li>
