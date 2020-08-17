import React from 'react';

const Logout = ({ handleLogout }) => {
	const onLogout = event => {
		event.stopPropagation();
		handleLogout();
	}

	return (
		<div className='logout-btn'  onClick={onLogout}>
			Logout
		</div>
	)
};

export default Logout;