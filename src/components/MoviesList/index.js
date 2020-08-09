import React from 'react';

import Poster from '../Poster';

import './moviesList.css';

const MoviesListComponent = ({ movies }) => {

	const renderMovies = () => (
		movies.map(movie => {
			return (
				<div key={movie.id} className='movie-row'>
					<Poster posterPath={movie.poster_path} />
					<span className='movie-name'>
						{movie.title}
					</span>
				</div>
			)
		})
	);

	return (
		<div className='moves'>
			{!movies.length ? 'Movies nothing!' : renderMovies()}
		</div>
	);
};

export default MoviesListComponent;