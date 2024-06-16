<svelte:options runes={true} />

<script lang="ts">
	import Bottom from '$lib/components/Sidebar/Bottom.svelte';
	import CloseButton from '$lib/components/Sidebar/CloseButton.svelte';
	import Logo from '$lib/components/Sidebar/Logo.svelte';
	import MenuItemWithSubmenus from '$lib/components/Sidebar/MenuItemWithSubmenus.svelte';
	import MenuItemWithoutSubmenus from '$lib/components/Sidebar/MenuItemWithoutSubmenus.svelte';
	import { functionClickOutside } from '$lib/functions/functionClickOutside.js';
	import { functionReadStore } from '$lib/functions/functionReadStore.js';
	import type { typeSidebarData } from '$lib/types/typeSidebarData.js';

	let {
		propSidebarExpanded = $bindable(),
		propSidebarData,
		propExpandAllMenus,
		propLogoImage,
		propLogoWidth,
		propLogoHref,
		propTitle,
	}: {
		propSidebarExpanded: boolean;
		propSidebarData: typeSidebarData<string>;
		propExpandAllMenus: boolean;
		propLogoImage?: string;
		propLogoWidth?: number;
		propLogoHref?: string;
		propTitle?: string;
	} = $props();

	const storeMobileMenu = functionReadStore<boolean>('contextIsMobileMenuVisible');
</script>

<div use:functionClickOutside={() => (storeMobileMenu.value = false)}>
	<!-- Sidebar backdrop (mobile only) -->
	<div
		class="fixed inset-0 z-40 transition-opacity duration-200 opacity-0 pointer-events-none bg-slate-900 bg-opacity-30 lg:z-auto lg:hidden"
		aria-hidden="true"
	></div>
	<!---->

	<div
		class:translate-x-0={storeMobileMenu.value}
		class:-translate-x-64={!storeMobileMenu.value}
		class:classContractedScrollWidth={!propSidebarExpanded}
		class:classExpandedScrollWidth={propSidebarExpanded}
		class="lg:classSidebarExpanded:!w-64 absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 -translate-x-64 flex-col overflow-y-auto overflow-x-hidden bg-colorDark p-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 2xl:!w-64"
	>
		<div class="flex justify-between pr-3 mb-10 sm:px-2">
			<Logo
				propLogo={propLogoImage}
				propWidth={propLogoWidth}
				{propTitle}
				propHref={propLogoHref}
			/>
			<CloseButton />
		</div>
		<div class="space-y-8">
			{#each propSidebarData as currentSection}
				<div>
					{#if currentSection.stringSection !== undefined}
						<h3 class="pl-3 text-xs font-semibold uppercase text-slate-500">
							<span
								class="hidden w-6 text-center lg:classSidebarExpanded:hidden lg:block 2xl:hidden"
								aria-hidden="true">•••</span
							>
							<span class="lg:classSidebarExpanded:block lg:hidden 2xl:block text-slate-400">
								{currentSection.stringSection}
							</span>
						</h3>
					{/if}
					<ul class="mt-3">
						{#each currentSection.arrayMenus as currentMenu}
							{#if 'stringHref' in currentMenu}
								<MenuItemWithoutSubmenus propData={currentMenu} />
							{:else}
								<MenuItemWithSubmenus
									propData={currentMenu}
									{propExpandAllMenus}
									bind:propSidebarExpanded
								/>
							{/if}
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<Bottom bind:propSidebarExpanded />
	</div>
</div>

<style>
	::-webkit-scrollbar {
		display: none;
	}
	::-webkit-scrollbar-track {
		background-color: transparent;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgba(80, 80, 80, 0.99);
		border-radius: 20px;
		border: 6px solid transparent;
		background-clip: content-box;
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: #a8bbbf;
	}
	:hover::-webkit-scrollbar {
		display: inline;
	}
	.classExpandedScrollWidth::-webkit-scrollbar {
		width: 20px;
	}
	.classContractedScrollWidth::-webkit-scrollbar {
		width: 0px;
	}
</style>
