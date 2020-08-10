import React from 'react';

import moviesReducer, {
	ContextMovies,
	initialState as initialMovies
} from './redux/movies';

import genresReducer, {
	ContextGenres,
	initialState as initialGenres
} from './redux/genres';

import movieItemReducer, {
	ContextMovieItem,
	initialState as initialMovieItem
} from './redux/movieItem';

const ReactProvider = ({children}) => {
	const [ moviesStore, moviesDispatch ] = React.useReducer(moviesReducer, initialMovies);
	const [ genresStore, genresDispatch ] = React.useReducer(genresReducer, initialGenres);
	const [ movieItemStore, movieItemDispatch ] = React.useReducer(movieItemReducer, initialMovieItem);
	return (
		<ContextGenres.Provider value={{ genresDispatch, genresStore }}>
			<ContextMovies.Provider value={{ moviesDispatch, moviesStore }}>
				<ContextMovieItem.Provider value={{ movieItemDispatch, movieItemStore }}>
					{children}
				</ContextMovieItem.Provider>
			</ContextMovies.Provider>
		</ContextGenres.Provider>
	);
};

export default ReactProvider;