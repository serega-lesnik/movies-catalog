import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE } from '../../constants';
import Poster from '../Poster';

import './moviesList.css';

const MoviesListComponent = ({ movies }) => {

	const renderMovies = () => (
		movies.map(movie => {
			return (
				<Link to={`${ROUTE.movie}/${movie.id}`} key={movie.id} className='movie-row'>
					<Poster posterPath={movie.poster_path} />
					<span className='movie-name'>
						{movie.title}
					</span>
				</Link>
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