import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Page404 = () => {
	const location = useLocation();
	const history = useHistory();

	const handleClick = e => {
		e.stopPropagation();
		history.goBack();
	}
	
	return (
		<div>
			<h3>Page 404</h3>
			<p>
				No match for <code>{location.pathname}</code>
			</p>
			<button onClick={handleClick}>Go back</button>
		</div>
	)
};

export default Page404;