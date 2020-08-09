import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ROUTE } from '../constants';

import MoviesList from './MoviesList';
import MovieItem from './MovieItem';

const App = () => {
	return(
		<Switch>
			<Route exact path={ROUTE.home} component={MoviesList} />
			<Route path={`${ROUTE.movie}/:slug`} component={MovieItem} />
		</Switch>
	);
};

export default App;