export const ROUTE = {
	home: '/',
	movie: '/movie',
};
export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '4237669ebd35e8010beee2f55fd45546';
export const LANGUAGE = 'en-US';
export const API_PATHS = {
	movieList: '/discover/movie',
	movieItem: '/movie/',
	genres: '/genre/movie/list',
};
export const API_IMAGES = {
	path: 'https://image.tmdb.org/t/p/',
	fullSize: 'original',
	smallSize: 'w500',
};
export const GENRE_KEY = 'with_genres';
export const SORT_KEY = 'sort_by';
export const SORT_BY = [
	{
		id: 'popularity.desc',
		name: 'Popularity',
	},
	{
		id: 'vote_average.desc',
		name: 'Rating',
	},
	{
		id: 'release_date.desc',
		name: 'Release',
	}
];