import Http from '../../services/httpService';
import { getKey } from '../../services/localStorrageServices';
import { API_PATHS, SESSION_KEY } from '../../constants';

export const FAVORITE_FILL = 'favorite.fill';
export const FAVORITE_CLEAR = 'favorite.clear';
export const FAVORITE_FETCHING = 'favorite.fetching';
export const FAVORITE_ERROR = 'favorite.error';
export const FAVORITE_ADD = 'favorite.add';
export const FAVORITE_REMOVE = 'favorite.remove';

export const clearFavorites = () => ({
	type: FAVORITE_CLEAR,
})

export const getFavorites = userId => dispatch => {
	dispatch({
		type: FAVORITE_FETCHING,
	});
	let needClear = true;


	const onSuccess = data => {
		const { total_pages, page, results } = data;
		if (needClear) {
			dispatch(clearFavorites());
			needClear = false;
		}
		dispatch({
			type: FAVORITE_FILL,
			data: results,
		});
		if (page < total_pages) getDataRecursive(page + 1);
	};
	const onError = error => {
		dispatch({
			type: FAVORITE_ERROR,
			error,
		});
	};

	const url = `${API_PATHS.account}/${userId}${API_PATHS.favoritesGetSub}`;
	const authData = JSON.parse(getKey()) || {};
	const searchParams = {
		[SESSION_KEY]: authData[SESSION_KEY]
	};

	const getDataRecursive = (page = 1) => {
		searchParams.page = page;
		Http.get(url, searchParams).then(onSuccess).catch(onError);
	};

	getDataRecursive();
};

export const markAsFavorites = (userId, movieId, favorite, callback) => dispatch => {
	const onError = error => {
		if (callback && typeof callback === 'function') {
			callback(false);
		}
	};

	const onSuccess = data => {
		const { success } = data;
		if (success) {
			const type = favorite ? FAVORITE_ADD : FAVORITE_REMOVE;
			dispatch({
				type,
				movieId,
			});
		}
		if (callback && typeof callback === 'function') {
			callback(!!success);
		}
	};

	const url = `${API_PATHS.account}/${userId}${API_PATHS.favoritePostSub}`;
	const body = {
		media_type: 'movie',
		media_id: movieId,
		favorite,
	};
	const authData = JSON.parse(getKey()) || {};
	const searchParams = {
		[SESSION_KEY]: authData[SESSION_KEY]
	};
	Http.post(url, body, searchParams).then(onSuccess).catch(onError);
};