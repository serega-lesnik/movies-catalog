import Http from '../../services/httpService';
import { getKey, setKey, removeKey } from '../../services/localStorrageServices';
import { API_PATHS, TOKEN_KEY, EXPIRES_KEY, SESSION_KEY } from '../../constants';

export const AUTH = 'auth.action';
export const AUTH_FETCHING = 'auth.fetching';
export const AUTH_ERROR = 'auth.error';

const getToken = () => {
	const onError = () => {
		removeKey();
		return Promise.reject('Token request is failed');
	};

	const onSuccess = data => {
		if (typeof data === 'object' && data.success) {
			const { request_token, expires_at } = data;
			setKey(JSON.stringify({
				[TOKEN_KEY]: request_token,
				[EXPIRES_KEY]: expires_at,
			}));
			return Promise.resolve(request_token);
		} else {
			onError();
		}
	};

	return Http.get(API_PATHS.token).then(onSuccess).catch(onError);
};

export const tokenApproved = token => dispatch => {
	dispatch({
		type: AUTH_FETCHING,
	});

	const onError = error => {
		removeKey();
		dispatch({
			type: AUTH_ERROR,
			error,
		});
	}
	
	const onSuccess = data => {
		const { success, session_id } = data;
		if (success && session_id) {
			const authData = JSON.parse(getKey()) || {};
			setKey(JSON.stringify({
				...authData,
				[SESSION_KEY]: session_id,
			}));
			dispatch({
				type: AUTH,
				isLogin: true,
			});
		} else {
			onError('get Session is failed');
		}
	};

	const body = {
		[TOKEN_KEY]: token
	};
	Http.post(API_PATHS.sessionCreate, body).then(onSuccess).catch(onError);
}

export const logIn = callback => dispatch => {
	dispatch({
		type: AUTH_FETCHING,
	});

	const onError = error => {
		dispatch({
			type: AUTH_ERROR,
			error,
		});
	};

	getToken().then(callback).catch(onError);
};

export const logOut = () => dispatch => {
	dispatch({
		type: AUTH_FETCHING,
	});

	const onError = error => {
		dispatch({
			type: AUTH_ERROR,
			error,
		});
	};

	const onSuccess = data => {
		const { success } = data;
		if (success) {
			dispatch({
				type: AUTH,
				isLogin: false,
			});
		} else {
			dispatch({
				type: AUTH,
				isLogin: true,
			});
		}
		
	};

	const authData = JSON.parse(getKey()) || {};
	const body = {
		[SESSION_KEY]: authData[SESSION_KEY]
	};
	Http.delete(API_PATHS.session, body).then(onSuccess).catch(onError);
};