import { functionReadStore } from '$lib/functions/functionReadStore.js';

export const functionSetMenuStates = function <T>({
	parActiveMenu,
	parExpandedMenu,
}: {
	parActiveMenu: T;
	parExpandedMenu?: T;
}) {
	const storeActiveMenu = functionReadStore<T>('contextActiveMenu');
	const storeExpandedMenu = functionReadStore<T | ''>('contextExpandedMenu');
	storeActiveMenu.value = parActiveMenu;
	storeExpandedMenu.value = parExpandedMenu ?? '';
};
