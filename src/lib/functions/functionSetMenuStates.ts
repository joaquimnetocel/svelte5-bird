import { functionReadStore } from '$lib/functions/stores.svelte.js';
import { functionReadExpandedMenuStore } from '$lib/stores/index.js';

export const functionSetMenuStates = function <T>({
	parActiveMenu,
	parExpandedMenu,
}: {
	parActiveMenu: T;
	parExpandedMenu?: T;
}) {
	const storeActiveMenu = functionReadStore<T>('contextActiveMenu');
	const storeExpandedMenu = functionReadExpandedMenuStore<T | ''>();
	storeActiveMenu.value = parActiveMenu;
	storeExpandedMenu.set(parExpandedMenu ?? '');
};
