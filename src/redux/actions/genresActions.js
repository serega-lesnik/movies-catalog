import Http from '../../services/httpService';
import { API_PATHS } from '../../constants';

export const GENRES = 'genres.action';
export const GENRES_FETCHING = 'genres.fetching';
export const GENRES_ERROR = 'genres.error';

export const getGenres = () => dispatch => {
	dispatch({
		type: GENRES_FETCHING,
	});

	const onSuccess = data => {
		dispatch({
			type: GENRES,
			data,
		});
	};

	const onError = error => {
		dispatch({
			type: GENRES_ERROR,
			error,
		});
	};

	Http.get(API_PATHS.genres).then(onSuccess).catch(onError);
};