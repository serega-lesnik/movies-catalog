import React from 'react';
import { useParams } from "react-router-dom";

const MovieItem = () => {
	const { slug } = useParams();
	console.log('--- slug:', slug);
	return (
		<div>
			Item
		</div>
	)
};

export default MovieItem;