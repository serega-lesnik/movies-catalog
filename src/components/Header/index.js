import React from 'react';

import './header.css';

const HeaderComponent = ({children}) => {

	return (
		<div className='header'>
			<div>
				Logotype
			</div>
			<div>
				{children}
			</div>
		</div>
	)
};

export default HeaderComponent;