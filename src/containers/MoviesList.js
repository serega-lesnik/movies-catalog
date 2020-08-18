import React, {
	useState,
	useEffect,
	useContext,
} from 'react';
import { useHistory } from 'react-router-dom';

import { useQuery } from '../utils';
import { ContextMovies } from '../redux/movies';
import { ContextGenres } from '../redux/genres';
import { SORT_BY, SORT_KEY, GENRE_KEY, ROUTE } from '../constants';
import { getMovies } from '../redux/actions/moviesActions';
import { getGenres } from '../redux/actions/genresActions';

import Loader from '../components/Loader';
import Title from '../components/Title';
import Pagination from '../components/Pagination';
import MoviesListComponent from '../components/MoviesList';
import SortSelect from '../components/SortSelect';
import Favorite from './Favorite';

const MoviesList = () => {
	const history = useHistory();
	const query = useQuery();
	const getQueryParam = (name, defaultVal) => query.get(name) || defaultVal;

	const [ page, setPage ] = useState(getQueryParam('page', 1));
	const [ genreFilter, setGenre ] = useState(getQueryParam(GENRE_KEY, 0));
	const [ sorted, setSorted ] = useState(getQueryParam(SORT_KEY, SORT_BY[0].id));
	const { moviesStore, moviesDispatch } = useContext(ContextMovies);
	const { genresStore, genresDispatch } = useContext(ContextGenres);

	const getSerchParams = () => {
		const searchParams = {
			page,
			[SORT_KEY]: sorted,
		};
		if (genreFilter && genreFilter != 0) {
			searchParams[GENRE_KEY] = genreFilter;
		}
		return searchParams;
	}

	useEffect(
		() => {
			const searchParams = getSerchParams();
			getMovies(searchParams)(moviesDispatch);
			let queryString = ROUTE.home;
			Object.keys(searchParams).forEach((key, i) => {
				const sepaator = i === 0 ? '?' : '&';
				queryString += `${sepaator}${key}=${searchParams[key]}`
			});
			history.push(queryString);
		},
		[page, genreFilter, sorted]
	);

	useEffect(
		() => getGenres()(genresDispatch),
		[genresDispatch]
	);

	const handleChangePage = num => {
		setPage(num);
	};

	const handleGenreChange = id => {
		setGenre(id);
	}

	const handleSortChange = id => {
		setSorted(id)
	}

	const renderError = () => (
		<div>
			Error: {moviesStore.error}
		</div>
	);

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
				<SortSelect
					label={'Filter of Genre:'}
					sortList={data.genres}
					selected={genreFilter}
					handleSortChange={handleGenreChange}
					addNone={true}
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

	const renderFilter = () => {
		return (
			<SortSelect
				label={'Sort by:'}
				sortList={SORT_BY}
				selected={sorted}
				handleSortChange={handleSortChange}
			/>
		);
	};

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
				{renderFilter()}
				<Pagination
					page={page}
					totalPages={total_pages}
					handleChangePage={handleChangePage}
				/>
				<MoviesListComponent movies={results} Favorite={Favorite} />
				<Pagination
					page={page}
					totalPages={total_pages}
					handleChangePage={handleChangePage}
				/>
			</div>
		);
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