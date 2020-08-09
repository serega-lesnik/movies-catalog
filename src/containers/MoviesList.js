import React, {
	useState,
	useEffect,
} from 'react';
import {
	useSelector,
	shallowEqual,
	useDispatch,
} from 'react-redux';

import { getMovies } from '../redux/actions/moviesActions';
import { getGenres } from '../redux/actions/genresActions';

import Loader from '../components/Loader';
import Title from '../components/Title';
import Pagination from '../components/Pagination';
import MoviesListComponent from '../components/MoviesList';
import Genres from '../components/Genres';

const MoviesList = () => {
	const [ page, setPage ] = useState(1);
	const moviesStore = useSelector(store => store.movies, shallowEqual);
	const genresStore = useSelector(store => store.genres, shallowEqual);
	const dispatch = useDispatch();

	useEffect(
		() => getMovies(page)(dispatch),
		[page]
	);

	useEffect(
		() => getGenres()(dispatch),
		[dispatch]
	);

	const handleChangePage = num => {
		setPage(num);
	};

	const handleGenreChange = id => {
		console.log('--- genre change:', id);
	}

	const renderError = () => (
		<div>
			Error: {moviesStore.error}
		</div>
	);

	const renderData = () => {
		const { data: {
			page,
			total_pages,
			total_results,
			results,
		}} = moviesStore;

		return (
			<div>
				<Title name={'Your movie list.'} />
				{renderGenres()}
				<MoviesListComponent movies={results} />
				<Pagination
					page={page}
					totalPages={total_pages}
					handleChangePage={handleChangePage}
				/>
			</div>
		);
	};

	const renderGenres = () => {
		const {
			fetched,
			isFetching,
			data,
			error,
		} = genresStore;
		if (isFetching) {
			return <Loader />;
		} else if (!isFetching && !fetched && error) {
			return renderError();
		} else if (!isFetching && fetched && !error && data) {
			return (
				<Genres
					{...data}
					handleGenreChange={handleGenreChange}
				/>
			);
		} else {
			return (
				<div>
					No Data!!!
				</div>
			);
		}
	};

	const renderPage = () => {
		const {
			fetched,
			isFetching,
			data,
			error,
		} = moviesStore;
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

	return (
		<div>
			{renderPage()}
		</div>
	)
};

export default MoviesList;