import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './containers/App';
import Provider from './provider';

ReactDOM.render(
	<Provider>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);