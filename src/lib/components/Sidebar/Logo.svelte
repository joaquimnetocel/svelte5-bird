<script lang="ts">
	import imageLogo from '$lib/images/logo.webp';

	export let propLogo: string | undefined;
	export let propWidth: number | undefined;
	export let propTitle: string | undefined;
	export let propHref: string | undefined;
</script>

<a aria-current="page" class="flex items-center space-x-2" href={propHref || '/'}>
	<img src={propLogo ?? imageLogo} alt="Logo" width={propWidth ?? 30} />
	<slot>
		<span
			class="hidden text-xl font-bold text-gray-300 lg:text-2xl classSidebarExpanded:inline bold"
		>
			{propTitle ?? 'SVELTE-BIRD'}
		</span>
	</slot>
</a>
