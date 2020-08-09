import React from 'react';
import { API_IMAGES } from '../../constants';
import './poster.css';

const Poster = ({posterPath}) => {
	return (
		<img
			src={`${API_IMAGES.path}${API_IMAGES.smallSize}${posterPath}`}
			className='poster-image'
		/>
	);
};

export default Poster;