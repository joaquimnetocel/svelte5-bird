<script lang="ts">
	import { functionClickOutside } from '$lib/functions/functionClickOutside.js';
	import type { typeNotificationsData } from '$lib/types/typeNotificationsData.js';
	import { slide } from 'svelte/transition';

	export let propNewNotifications = true;
	export let propTitle = 'NOTIFICATIONS:';
	export let propData: typeNotificationsData = [];
	export let propNotFoundMessage = 'NO NOTIFICATION FOUND!';
	export let propIcon = `
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path
				class="fill-current text-slate-500 dark:text-slate-400"
				d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
			/>
			<path
				class="fill-current text-slate-400 dark:text-slate-500"
				d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
			/>
		</svg>
	`;

	let stateExpanded = false;
</script>

<div use:functionClickOutside={() => (stateExpanded = false)} class="relative inline-flex">
	<button
		on:click={() => (stateExpanded = !stateExpanded)}
		class="flex items-center justify-center w-8 h-8 rounded-full false bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80"
		aria-haspopup="true"
		aria-expanded={stateExpanded}
	>
		<span class="sr-only">{propTitle}</span>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html propIcon}
		{#if propNewNotifications}
			<div
				class="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-rose-500 dark:border-[#182235]"
			/>
		{/if}
	</button>
	{#if stateExpanded}
		<div
			transition:slide
			class:enter-done={stateExpanded}
			class="w-80 sm:w-96 min-w-80 absolute right-0 top-full z-10 -mr-48 mt-1 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:mr-0"
		>
			<div>
				<div
					class="px-4 pb-2 pt-1.5 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500"
				>
					{propTitle}
				</div>
				{#if propData.length === 0}
					<div class="flex justify-center">
						<small>{propNotFoundMessage}</small>
					</div>
				{:else}
					<ul>
						{#each propData as current}
							<li class="border-b border-slate-200 last:border-0 dark:border-slate-700">
								<a
									class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/20"
									href={current.stringHref}
									target={current.stringTarget}
								>
									<!-- eslint-disable-next-line svelte/no-at-html-tags -->
									{@html current.stringText}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>
