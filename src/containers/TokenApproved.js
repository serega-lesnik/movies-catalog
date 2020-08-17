import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import { OLD_LOCATION_KEY, TOKEN_KEY } from '../constants';
import { useQuery } from '../utils';
import { tokenApproved } from '../redux/actions/authActions';
import { ContextAuth } from '../redux/auth';

const TokenApproved = () => {
	const history = useHistory();
	const query = useQuery();
	const { authDispatch } = useContext(ContextAuth);

	const redirectToLastPage = () => {
		const routeTo = window.atob(query.get(OLD_LOCATION_KEY));
		const url = new URL(routeTo);
		const redirect = `${url.pathname}${url.search}`;
		history.push(redirect);
	}

	const aproved = () => {
		const requestToken = query.get(TOKEN_KEY);
		tokenApproved(requestToken)(authDispatch);
		redirectToLastPage();
	};

	useEffect(aproved, [authDispatch]);

	return (
		<div>
			Approved Success!
		</div>
	);
};

export default TokenApproved;