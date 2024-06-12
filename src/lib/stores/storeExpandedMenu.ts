// import { functionIsRunningOnBrowser } from '../functionIsRunningOnBrowser.js';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const symbolContextKey = Symbol();

export function functionCreateExpandedMenuStore() {
	const storeReturn = writable<string>('');
	setContext(symbolContextKey, storeReturn);
}

export function functionReadExpandedMenuStore<genericT = string>() {
	return getContext<Writable<genericT>>(symbolContextKey);
}
