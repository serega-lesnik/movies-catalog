import React from 'react';

const Loader = (/* {
	fetched,
	isFetching,
	data,
	error,
	children,
} */) => {
	/* const renderError = () => (
		<div>
			Error: {movies.error}
		</div>
	);

	const renderPage = () => {
		if (isFetching) {
			return (
				<div>
					Loading...
				</div>
			);
		} else if (!isFetching && !fetched && error) {
			return renderError();
		} else if (!isFetching && fetched && !error && data) {
			return React.Children.map(children, child => (
				React.cloneElement(child, {...data})
			))
		} else {
			return (
				<div>
					No Data!!!
				</div>
			);
		}
	}; */

	return (
		<div>
			{/* {renderPage()} */}
			Loading...
		</div>
	);
};

export default Loader;