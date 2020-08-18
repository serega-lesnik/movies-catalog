import React from "react";
import {
	FAVORITE_FILL,
	FAVORITE_CLEAR,
	FAVORITE_FETCHING,
	FAVORITE_ERROR,
	FAVORITE_ADD,
	FAVORITE_REMOVE,
} from './actions/favoriteActions';

export const initialState = {
	fetched: false,
	isFetching: false,
	data: null,
	error: null,
};

export const ContextFavorite = React.createContext();

const movies = (state = initialState, action) => {
	const { type } = action;
	if (!type) return state;

	switch (type) {
		case FAVORITE_CLEAR: {
			return { ...initialState };
		}

		case FAVORITE_FETCHING: {
			return {
				...state,
				fetched: false,
				isFetching: true,
				error: null,
			};
		}

		case FAVORITE_ERROR: {
			const { error } = action;
			return {
				...state,
				fetched: false,
				isFetching: false,
				error,
			};
		}

		case FAVORITE_FILL: {
			const { data: result } = action;
			const { data } = state;
			const newData = new Set();
			if (data && data instanceof Set) {
				data.forEach(item => {
					newData.add(item);
				});
			}
			if (Array.isArray(result)) {
				result.forEach(item => {
					newData.add(item.id);
				});
			}
			return {
				...state,
				fetched: true,
				isFetching: false,
				data: newData,
				error: null,
			};
		}

		case FAVORITE_ADD: {
			const { movieId } = action;
			const { data } = state;
			const newData = new Set();
			if (data && data instanceof Set) {
				data.forEach(item => {
					newData.add(item);
				});
			}
			newData.add(movieId);
			return {
				...state,
				fetched: true,
				isFetching: false,
				data: newData,
				error: null,
			};
		}

		case FAVORITE_REMOVE: {
			const { movieId } = action;
			const { data } = state;
			const newData = new Set();
			if (data && data instanceof Set) {
				data.forEach(item => {
					newData.add(item);
				});
			}
			newData.delete(movieId);
			return {
				...state,
				fetched: true,
				isFetching: false,
				data: newData,
				error: null,
			};
		}

		default: {
			return { ...state };
		}
	}
};

export default movies;