import React from "react";
import {
	PROFILE,
	PROFILE_FETCHING,
	PROFILE_ERROR,
} from './actions/profileActions';

export const initialState = {
	fetched: false,
	isFetching: false,
	data: null,
	error: null,
};

export const ContextProfile = React.createContext();

const genres = (state = initialState, action) => {
	const { type } = action;
	if (!type) return state;

	switch (type) {
		case PROFILE_FETCHING: {
			return {
				...state,
				fetched: false,
				isFetching: true,
				error: null,
			};
		}

		case PROFILE_ERROR: {
			const { error } = action;
			return {
				...state,
				fetched: false,
				isFetching: false,
				error,
			};
		}

		case PROFILE: {
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