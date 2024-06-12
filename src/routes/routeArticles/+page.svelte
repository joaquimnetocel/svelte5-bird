<svelte:options runes={true} />

<script lang="ts">
	import { functionSetMenuStates } from '$lib/functions/index.js';
	import type { typeMenuNames } from '../types/typeMenuNames.js';

	functionSetMenuStates<typeMenuNames>({
		parActiveMenu: 'menuArticles',
		parExpandedMenu: 'menuTeaching',
	});
</script>

THIS IS THE ARTICLES ROUTE
