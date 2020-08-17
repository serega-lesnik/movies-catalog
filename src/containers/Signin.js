import React, {
	useContext,
	useEffect,
} from 'react';
import { useLocation } from "react-router-dom";

import { ROUTE, API_AUTH, OLD_LOCATION_KEY } from '../constants';
import { ContextAuth } from '../redux/auth';
import { logIn, logOut } from '../redux/actions/authActions';
import { ContextProfile } from '../redux/profile';
import { getProfile } from '../redux/actions/profileAction';

import Login from '../components/Login'
import Profile from '../components/Profile';

const Signin = () => {

	const routerLocation = useLocation();
	const { authDispatch, authStore } = useContext(ContextAuth);
	const { profileDispatch, profileStore } = useContext(ContextProfile);
	const { isLogin } = authStore;

	useEffect(
		() => {
			if (isLogin) {
				getProfile()(profileDispatch);
			}
		},
		[isLogin]
	);

	const redirectToLogin = token => {
		const { location } = window;
		const { pathname, search } = routerLocation;
		const localAddr = location.origin;
		const routeTo = window.btoa(`${localAddr}${pathname}${search}`);
		const urlApproved = `${localAddr}${ROUTE.tokenApproved}?${OLD_LOCATION_KEY}=${routeTo}`;
		const url = `${API_AUTH}${token}?redirect_to=${urlApproved}`;
		location.assign(url);
	}

	const handleLogin = () => {
		logIn(redirectToLogin)(authDispatch);
	};

	const handleLogout = () => {
		logOut()(authDispatch);
	};

	if (isLogin) {
		return (
			<Profile
				{...profileStore}
				handleLogout={handleLogout}
			/>
		);
	}
	return (
		<Login
			{...authStore}
			handleLogin={handleLogin}
		/>
	);
};

export default Signin;