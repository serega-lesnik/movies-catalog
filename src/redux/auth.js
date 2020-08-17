import React from "react";
import {
 AUTH,
 AUTH_FETCHING,
 AUTH_ERROR,
} from './actions/authActions';


export const initialState = {
	fetched: false,
	isFetching: false,
	isLogin: false,
	error: null,
};
export const ContextAuth = React.createContext();

const auth = (state = initialState, action) => {
	const { type } = action;
	if (!type) return state;

	switch (type) {
		case AUTH_FETCHING: {
			return {
				...state,
				fetched: false,
				isFetching: true,
				isLogin: false,
				error: null,
			};
		}

		case AUTH_ERROR: {
			const { error } = action;
			return {
				...state,
				fetched: false,
				isFetching: false,
				isLogin: false,
				error,
			};
		}

		case AUTH: {
			const { isLogin } = action;
			return {
				...state,
				fetched: true,
				isFetching: false,
				error: null,
				isLogin,
			}
		}

		default: {
			return { ...state };
		}
	}
};

export default auth;