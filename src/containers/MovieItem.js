import React, {
	useContext,
	useEffect,
} from 'react';
import { useParams, useHistory } from "react-router-dom";

import { ContextMovieItem } from '../redux/movieItem';
import { getMovieItem } from '../redux/actions/movieItemActions';

import Loader from '../components/Loader';
import MovieItemComponent from '../components/MovieItem';

const MovieItem = () => {
	const { movieId } = useParams();
	const history = useHistory();
	const { movieItemStore, movieItemDispatch } = useContext(ContextMovieItem);

	useEffect(
		() => getMovieItem(movieId)(movieItemDispatch),
		[movieId]
	);

	const goBack = () => {
		history.goBack();
	};

	const renderData = () => {
		const { data } = movieItemStore;

		return (<MovieItemComponent
			goBack={goBack}
			{...data}
		/>);
	};

	const renderError = () => (
		<div>
			Error: {movieItemStore.error}
		</div>
	);

	const renderPage = () => {
		const {
			fetched,
			isFetching,
			data,
			error,
		} = movieItemStore;
		if (isFetching) {
			return <Loader />;
		} else if (!isFetching && !fetched && error) {
			return renderError();
		} else if (!isFetching && fetched && !error && data) {
			return renderData();
		} else {
			return (
				<div>
					No Data!!!
				</div>
			);
		}
	};

	console.log('--- movieId:', movieId);
	console.log('--- movieItemStore:', movieItemStore.data);
	return (
		<div>
			{renderPage()}
		</div>
	)
};

export default MovieItem;