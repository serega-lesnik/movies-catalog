import React from "react";
import {
	MOVIE_ITEM,
	MOVIE_ITEM_FETCHING,
	MOVIE_ITEM_ERROR,
} from './actions/movieItemActions';

export const initialState = {
	fetched: false,
	isFetching: false,
	data: null,
	error: null,
};

export const ContextMovieItem = React.createContext();

const movies = (state = initialState, action) => {
	const { type } = action;
	if (!type) return state;

	switch (type) {
		case MOVIE_ITEM_FETCHING: {
			return {
				...state,
				fetched: false,
				isFetching: true,
				error: null,
			};
		}

		case MOVIE_ITEM_ERROR: {
			const { error } = action;
			return {
				...state,
				fetched: false,
				isFetching: false,
				error,
			};
		}

		case MOVIE_ITEM: {
			const { data } = action;
			return {
				...state,
				fetched: true,
				isFetching: false,
				data,
				error: null,
			};
		}

		default: {
			return { ...state };
		}
	}
};

export default movies;