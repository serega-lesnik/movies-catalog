import React, { useState } from 'react';

import './favorite.css';

const FavoriteComponent = ({
	isFavorite,
	handleToggleFavorite,
}) => {
	const activeClass = isFavorite ? ' favorite-active' : '';
	const [ disable, setDisable ] = useState(false);

	const unblockFavorite = () => {
		setDisable(false);
	};

	const changeFavorite = event => {
		if (!disable) {
			setDisable(true);
			event.stopPropagation();
			handleToggleFavorite(!isFavorite, unblockFavorite);
		}
	};

	return (
		<div className='favorite-btn' onClick={changeFavorite}>
			<div className={`favorite-icon${activeClass}`} />
		</div>
	)
};

export default FavoriteComponent;