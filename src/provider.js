import React from 'react';
import moviesReducer, {
	ContextMovies,
	initialState as initialMovies
} from './redux/movies';
import genresReducer, {
	ContextGenres,
	initialState as initialGenres
} from './redux/genres'

const ReactProvider = ({children}) => {
	const [ moviesStore, moviesDispatch ] = React.useReducer(moviesReducer, initialMovies);
	const [ genresStore, genresDispatch ] = React.useReducer(genresReducer, initialGenres);
	return (
		<ContextGenres.Provider value={{ genresDispatch, genresStore }}>
			<ContextMovies.Provider value={{ moviesDispatch, moviesStore }}>
				{children}
			</ContextMovies.Provider>
		</ContextGenres.Provider>
	);
};

export default ReactProvider;