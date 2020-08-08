import React from 'react';
import { Switch, Route } from "react-router-dom";
import MoviesList from './MoviesList';

const App = () => {
	return(
		<Switch>
			<Route path='/' component={MoviesList} />
		</Switch>
	);
};

export default App;