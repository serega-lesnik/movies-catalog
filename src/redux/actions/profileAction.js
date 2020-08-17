import Http from '../../services/httpService';
import { getKey } from '../../services/localStorrageServices';
import { API_PATHS, SESSION_KEY } from '../../constants';

export const PROFILE = 'profile.action';
export const PROFILE_FETCHING = 'profile.fetching';
export const PROFILE_ERROR = 'profile.error';

export const getProfile = () => dispatch => {
	dispatch({
		type: PROFILE_FETCHING,
	});

	const onSuccess = data => {
		dispatch({
			type: PROFILE,
			data,
		});
	};

	const onError = error => {
		dispatch({
			type: PROFILE_ERROR,
			error,
		});
	};

	const authData = JSON.parse(getKey()) || {};
	const searchParams = {
		[SESSION_KEY]: authData[SESSION_KEY]
	};

	Http.get(API_PATHS.account, searchParams).then(onSuccess).catch(onError);
};