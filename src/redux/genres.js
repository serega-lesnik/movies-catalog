const initialState = {
	fetched: false,
	isFetching: false,
	data: null,
	error: null,
};

import {
	GENRES,
	GENRES_FETCHING,
	GENRES_ERROR,
} from './actions/genresActions';

const genres = (state = initialState, action) => {
	const { type } = action;
	if (!type) return state;

	switch (type) {
		case GENRES_FETCHING: {
			return {
				...state,
				fetched: false,
				isFetching: true,
				error: null,
			};
		}

		case GENRES_ERROR: {
			const { error } = action;
			return {
				...state,
				fetched: false,
				isFetching: false,
				error,
			};
		}

		case GENRES: {
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

export default genres;