<svelte:options runes={true} />

<script lang="ts">
	import imageLogo from '$lib/images/logo.webp';
	import type { Snippet } from 'svelte';

	let {
		children,
		propLogo,
		propWidth,
		propTitle,
		propHref,
	}: {
		children?: Snippet;
		propLogo?: string;
		propWidth?: number;
		propTitle?: string;
		propHref?: string;
	} = $props();
</script>

<a aria-current="page" class="flex items-center space-x-2" href={propHref || '/'}>
	<img src={propLogo ?? imageLogo} alt="Logo" width={propWidth ?? 30} />
	{#if children}
		{@render children()}
	{:else}
		<span
			class="hidden text-xl font-bold text-gray-300 lg:text-2xl classSidebarExpanded:inline bold"
		>
			{propTitle ?? 'SVELTE-BIRD'}
		</span>
	{/if}
</a>
