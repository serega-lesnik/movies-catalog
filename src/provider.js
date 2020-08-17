import React, { useReducer } from 'react';

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

import authReducer, {
	ContextAuth,
	initialState as initialAuth
} from './redux/auth';

import profileReducer, {
	ContextProfile,
	initialState as initialProfile
} from './redux/profile';

const ReactProvider = ({children}) => {
	const [ moviesStore, moviesDispatch ] = useReducer(moviesReducer, initialMovies);
	const [ genresStore, genresDispatch ] = useReducer(genresReducer, initialGenres);
	const [ movieItemStore, movieItemDispatch ] = useReducer(movieItemReducer, initialMovieItem);
	const [ authStore, authDispatch ] = useReducer(authReducer, initialAuth);
	const [ profileStore, profileDispatch ] = useReducer(profileReducer, initialProfile);
	return (
		<ContextAuth.Provider value={{ authDispatch, authStore }}>
			<ContextProfile.Provider value={{ profileDispatch, profileStore }}>
				<ContextGenres.Provider value={{ genresDispatch, genresStore }}>
					<ContextMovies.Provider value={{ moviesDispatch, moviesStore }}>
						<ContextMovieItem.Provider value={{ movieItemDispatch, movieItemStore }}>
							{children}
						</ContextMovieItem.Provider>
					</ContextMovies.Provider>
				</ContextGenres.Provider>
			</ContextProfile.Provider>
		</ContextAuth.Provider>
	);
};

export default ReactProvider;