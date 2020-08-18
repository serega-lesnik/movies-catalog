import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE } from '../../constants';
import Poster from '../Poster';

import './moviesList.css';

const MoviesListComponent = ({ movies, Favorite }) => {

	const renderMovies = () => (
		movies.map((movie, i) => {
			return (
				<div key={movie.id} className='movie-row'>
					<Link to={`${ROUTE.movie}/${movie.id}`} className='movie-link'>
						<Poster posterPath={movie.poster_path} />
						<span className='movie-name'>
							{movie.title}
						</span>
					</Link>
					<Favorite movieId={movie.id} first={i == 0} />
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