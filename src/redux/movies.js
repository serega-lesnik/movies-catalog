import {
	MOVIES,
	MOVIES_FETCHING,
	MOVIES_ERROR,
} from './actions/moviesActions';

const initialState = {
	fetched: false,
	isFetching: false,
	data: null,
	error: null,
};

const movies = (state = initialState, action) => {
	const { type } = action;
	if (!type) return state;

	switch (type) {
		case MOVIES_FETCHING: {
			return {
				...state,
				fetched: false,
				isFetching: true,
				error: null,
			};
		}

		case MOVIES_ERROR: {
			const { error } = action;
			return {
				...state,
				fetched: false,
				isFetching: false,
				error,
			};
		}

		case MOVIES: {
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