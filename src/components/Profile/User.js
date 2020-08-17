import React from 'react';

import blankAvatar from './blank-avatar.svg';

const User = ({
	id,
	avatar,
	username,
	name,
}) => {
	return (
		<div className='user'>
			<img src={blankAvatar} className='user-avatar' alt={`${username} avatar image`} />
			<div className='user-name'>
				{username}
			</div>
		</div>
	)
};

export default User;