import React from 'react';

const Genres = ({
	genres,
	handleGenreChange
}) => {
	const onChange = event => {
		handleGenreChange(event.target.value)
	};

	return (
		<div>
			<select onChange={onChange}>
				<option value={null} key={'none'}>None</option>
				{genres.map(genre => (
					<option value={genre.id} key={genre.id}>{genre.name}</option>
				))}
			</select>
		</div>
	)
};

export default Genres;