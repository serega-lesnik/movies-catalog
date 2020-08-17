import React from 'react';

import Spinner from '../Spinner';
import './login.css';

const Login = ({
	fetched,
	isFetching,
	error,
	handleLogin,
}) => {
	const onLogin = event => {
		event.stopPropagation();
		handleLogin();
	}

	const renderError = () => {
		if (!isFetching && !fetched && error) {
			let errorMessage = 'undefined login error';
			if (typeof error === 'string') {
				errorMessage = error;
			} else if (typeof error === 'object') {
				errorMessage = error.message || error.status_message;
			}
			return (
				<div className='login-error'>
					{errorMessage}
				</div>
			);
		}
		return (null);
	}

	const renderButton = () => {
		return (
			<div className='login-btn' onClick={onLogin}>
				Login
			</div>
		);
	}


	if (isFetching) {
		return <Spinner />;
	}
	return (
		<div className='login'>
			{renderButton()}
			{renderError()}
		</div>
	);
};

export default Login;