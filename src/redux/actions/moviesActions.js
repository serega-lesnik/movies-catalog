import Http from '../../services/httpService';
import { API_PATHS } from '../../constants';

export const MOVIES = 'movies.action';
export const MOVIES_FETCHING = 'movies.fetching';
export const MOVIES_ERROR = 'movies.error';

export const getMovies = (page = 1) => dispatch => {
	dispatch({
		type: MOVIES_FETCHING,
	});

	const onSuccess = data => {
		dispatch({
			type: MOVIES,
			data,
		});
	};

	const onError = error => {
		dispatch({
			type: MOVIES_ERROR,
			error,
		});
	};

	Http.get(API_PATHS.movieList, { page }).then(onSuccess).catch(onError);
};