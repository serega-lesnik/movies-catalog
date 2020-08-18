import React from 'react';

import Poster from '../Poster';

import './movieItem.css';

const MovieItemComponent = ({
	goBack,
	Favorite,
	id,
	title,
	genres,
	popularity,
	overview,
	poster_path,
	release_date,
}) => {

	const handleClickBack = e => {
		e.stopPropagation();
		goBack();
	};

	return (
		<div>
		{/* <div style={{ backgroundImage: `url( ${API_IMAGES.path}${API_IMAGES.fullSize}${backdrop_path} )`}}> */}
			<button onClick={handleClickBack}>Go back</button>
			<h3>{title}</h3>
			<div className='row-container'>
				<Favorite movieId={id} />
			</div>
			<div className='row-container'>
				<h4>Popularity:</h4>
				<span>{popularity}</span>
			</div>
			<div className='row-container'>
				<h4>Genres:</h4>
				{genres.map(genre => (
					<span className='genre-item' key={genre.id}>{
						genre.name}
					</span>
				))}
			</div>
			<h4>Overview:</h4>
			<div className='row-container top'>
				<p>{overview}</p>
				<Poster posterPath={poster_path} />
			</div>
			<div className='row-container'>
				<h4>Release date:</h4>
				<span>{release_date}</span>
			</div>
		</div>
	);
};

export default MovieItemComponent;