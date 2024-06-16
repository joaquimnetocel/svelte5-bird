import type { typeContext } from '$lib/types/typeContext.js';
import { setContext } from 'svelte';

export function functionCreateStore<genericT>(parInitialValue: genericT, parContext: typeContext) {
	const state = $state({ value: parInitialValue });
	setContext(parContext, state);
}
