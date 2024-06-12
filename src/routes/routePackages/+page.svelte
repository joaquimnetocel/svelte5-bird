<svelte:options runes={true} />

<script lang="ts">
	import { functionSetMenuStates } from '$lib/functions/index.js';
	import type { typeMenuNames } from '../types/typeMenuNames.js';

	functionSetMenuStates<typeMenuNames>({
		parActiveMenu: 'menuPackages',
		parExpandedMenu: '',
	});
</script>

THIS IS THE 'PACKAGES' ROUTE
