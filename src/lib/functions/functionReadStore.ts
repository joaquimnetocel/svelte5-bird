import type { typeContext } from '$lib/types/typeContext.js';
import { getContext, setContext } from 'svelte';

export function functionReadStore<T>(parContext: typeContext) {
	return getContext<{ value: T }>(parContext);
}
