import { STORAGE_AUTH_KEY } from '../constants';

const localStore = window.localStorage;

export const getKey = (id = STORAGE_AUTH_KEY) => (
	localStore.getItem(id) || null
);

export const setKey = (value = null, id = STORAGE_AUTH_KEY) => {
	localStore.setItem(id, value);
 	return value;
};

export const removeKey = (id = STORAGE_AUTH_KEY) => {
	localStore.removeItem(id);
	return id;
};