import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ROUTE } from '../constants';

import MoviesList from './MoviesList';

const App = () => {
	return(
		<Switch>
			<Route path={ROUTE.home} component={MoviesList} />
		</Switch>
	);
};

export default App;