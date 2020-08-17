	import React from 'react';

import Spinner from '../Spinner';
import User from './User';
import Logout from './Logout';

import './profile.css';

const Profile = ({
	fetched,
	isFetching,
	data,
	error,
	handleLogout,
}) => {

	if (isFetching) {
		return <Spinner />;
	}
	return (
		<div className='profile'>
			<User {...data} />
			<Logout handleLogout={handleLogout} />
		</div>
	);
};

export default Profile;