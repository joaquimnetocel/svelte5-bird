<script lang="ts">
	import MobileMenuButton from '$lib/components/MobileMenuButton.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { functionIsRunningOnBrowser } from '$lib/functions/functionIsRunningOnBrowser.js';
	import imageLogo from '$lib/images/logo.webp';
	import { functionCreateActiveMenuStore } from '$lib/stores/storeActiveMenu.js';
	import {
		functionCreateDarkModeStore,
		functionReadDarkModeStore,
	} from '$lib/stores/storeDarkMode.js';
	import { functionCreateExpandedMenuStore } from '$lib/stores/storeExpandedMenu.js';
	import { functionCreateMobileMenuStore } from '$lib/stores/storeMobileMenu.js';
	import type { typeSidebarData } from '$lib/types/typeSidebarData.js';

	export let propSidebarData: typeSidebarData<string>;
	export let propExpandAllMenus = true;
	export let propLogoImage: string | undefined = undefined;
	export let propLogoWidth: number | undefined = undefined;
	export let propLogoHref: string | undefined = undefined;

	export let propTitle: string | undefined = undefined;

	functionCreateMobileMenuStore();
	functionCreateDarkModeStore();
	functionCreateActiveMenuStore();
	functionCreateExpandedMenuStore();
	const storeDarkMode = functionReadDarkModeStore();

	let stateSidebarExpanded = functionSidebarExpanded();
	function functionSidebarExpanded() {
		if (functionIsRunningOnBrowser()) {
			return localStorage.getItem('storageSidebarExpanded') === 'false' ? false : true;
		}
		return true;
	}
</script>

<div id="idHtml" class:dark={$storeDarkMode} style:color-scheme={$storeDarkMode ? 'dark' : ''}>
	<div
		id="idBody"
		class:classSidebarExpanded={stateSidebarExpanded}
		class="antialiased font-inter bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400"
	>
		<div class="flex h-screen overflow-hidden">
			<Sidebar
				bind:propSidebarExpanded={stateSidebarExpanded}
				{propSidebarData}
				{propExpandAllMenus}
				{propLogoImage}
				{propLogoWidth}
				{propTitle}
				{propLogoHref}
			/>
			<div class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-hidden">
				<header
					class="sticky top-0 z-30 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-[#182235]"
				>
					<div class="flex px-4 sm:px-6 lg:px-8">
						<MobileMenuButton />
						<div class="flex items-center justify-between flex-grow h-16 -mb-px">
							<a class="flex items-center space-x-2 lg:hidden" href={propLogoHref ?? '/'}>
								<img src={propLogoImage ?? imageLogo} alt="Logo" width={propLogoWidth ?? 30} />
								<div class="hidden text-2xl font-bold md:block bold">
									{propTitle ?? 'SVELTE-BIRD'}
								</div>
							</a>
							<slot name="slotHeader" />
						</div>
					</div>
				</header>
				<main class="flex flex-col flex-grow overflow-y-auto">
					<slot />
				</main>
				<footer
					class="px-2 sm:px-4 lg:px-4 sticky z-30 border-t border-slate-400 bg-white dark:border-slate-700 dark:bg-[#182235]"
				>
					<slot name="slotFooter" />
				</footer>
			</div>
		</div>
	</div>
</div>
