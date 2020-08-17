import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ROUTE } from '../constants';

import Header from './Header';
import MoviesList from './MoviesList';
import MovieItem from './MovieItem';
import TokenApproved from './TokenApproved';
import Page404 from '../components/Page404';

const App = () => {
	return([
		<Route path={ROUTE.home} component={Header} key='head' />,
		<Switch key='route'>
			<Route exact path={ROUTE.home} component={MoviesList} />
			<Route path={`${ROUTE.movie}/:movieId`} component={MovieItem} />
			<Route exact path={ROUTE.tokenApproved} component={TokenApproved} />
			<Route path={'*'} component={Page404} />
		</Switch>
	]);
};

export default App;