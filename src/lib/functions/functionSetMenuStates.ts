import { functionReadActiveMenuStore, functionReadExpandedMenuStore } from '$lib/stores/index.js';

export const functionSetMenuStates = function <T>({
	parActiveMenu,
	parExpandedMenu,
}: {
	parActiveMenu: T;
	parExpandedMenu?: T;
}) {
	const storeActiveMenu = functionReadActiveMenuStore<T>();
	const storeExpandedMenu = functionReadExpandedMenuStore<T | ''>();
	storeActiveMenu.set(parActiveMenu);
	storeExpandedMenu.set(parExpandedMenu ?? '');
};
