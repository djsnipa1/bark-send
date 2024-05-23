import { writable } from 'svelte/store';

export const toSend = writable('');

export const encodedToSend = writable('');

export const recievedPOST = writable('');
