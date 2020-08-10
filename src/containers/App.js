import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ROUTE } from '../constants';

import MoviesList from './MoviesList';
import MovieItem from './MovieItem';
import Page404 from '../components/Page404';

const App = () => {
	return(
		<Switch>
			<Route exact path={ROUTE.home} component={MoviesList} />
			<Route path={`${ROUTE.movie}/:movieId`} component={MovieItem} />
			<Route path={'*'} component={Page404} />
		</Switch>
	);
};

export default App;