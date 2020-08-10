import Http from '../../services/httpService';
import { API_PATHS } from '../../constants';

export const MOVIE_ITEM = 'movieItem.action';
export const MOVIE_ITEM_FETCHING = 'movieItem.fetching';
export const MOVIE_ITEM_ERROR = 'movieItem.error';

export const getMovieItem = movieId => dispatch => {
	dispatch({
		type: MOVIE_ITEM_FETCHING,
	});

	const onSuccess = data => {
		dispatch({
			type: MOVIE_ITEM,
			data,
		});
	};

	const onError = error => {
		dispatch({
			type: MOVIE_ITEM_ERROR,
			error,
		});
	};

	Http.get(`${API_PATHS.movieItem}${movieId}`).then(onSuccess).catch(onError);
};