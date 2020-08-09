import React from 'react';
import './title.css';

const Title = ({ name }) => (
	<div className='page-title'>
		<span>
			{name}
		</span>
	</div>
)

export default Title;