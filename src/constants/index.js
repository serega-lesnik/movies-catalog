export const ROUTE = {
	home: '/',
  movie: '/movie',
  tokenApproved: '/token-approved',
};
export const API_URL = 'https://api.themoviedb.org/3';
export const API_AUTH = 'https://www.themoviedb.org/authenticate/';
export const API_KEY = '4237669ebd35e8010beee2f55fd45546';
export const LANGUAGE = 'en-US';
export const API_PATHS = {
	movieList: '/discover/movie',
	movieItem: '/movie/',
  genres: '/genre/movie/list',
  token: '/authentication/token/new',
  session: '/authentication/session',
  sessionCreate: '/authentication/session/new',
  account: '/account',
  favoritesGetSub: '/favorite/movies',
  favoritePostSub: '/favorite',
};
export const API_IMAGES = {
	path: 'https://image.tmdb.org/t/p/',
	fullSize: 'original',
	smallSize: 'w500',
};
export const STORAGE_AUTH_KEY = 'auth';
export const OLD_LOCATION_KEY = 'oldLocation';
export const TOKEN_KEY = 'request_token';
export const SESSION_KEY = 'session_id';
export const EXPIRES_KEY = 'expires_at';
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


var token = {
  "success": true,
  "expires_at": "2020-08-12 16:06:46 UTC",
  "request_token": "7ba98b1ba2b9faa4a2b3d261c8d701f921868767"
}

var session = {
  "success": true,
  "session_id": "13dd13d7c44aaae87318e9cb126bc15993064482"
}

var user = {
  "avatar": {
    "gravatar": {
      "hash": "496fa65a6f583adbe5c2bb029c2e6666"
    }
  },
  "id": 9566455,
  "iso_639_1": "ru",
  "iso_3166_1": "RU",
  "name": "",
  "include_adult": false,
  "username": "serhii_che"
}

var favoriteMovies = {
  "page": 1,
  "results": [
    {
      "id": 612706,
      "video": false,
      "vote_count": 237,
      "vote_average": 8.1,
      "title": "Work It",
      "release_date": "2020-08-07",
      "original_language": "en",
      "original_title": "Work It",
      "genre_ids": [
        35,
        10402
      ],
      "backdrop_path": "/ishzDCZIv9iWfI70nv5E4ZreYUD.jpg",
      "adult": false,
      "overview": "A brilliant but clumsy high school senior vows to get into her late father's alma mater by transforming herself and a misfit squad into dance champions.",
      "poster_path": "/b5XfICAvUe8beWExBz97i0Qw4Qh.jpg",
      "popularity": 150.585
    }
  ],
  "total_pages": 1,
  "total_results": 1
}
