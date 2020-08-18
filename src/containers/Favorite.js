import React, {
	useContext,
	useEffect,
	useState,
} from 'react';

import { ContextAuth } from '../redux/auth';
import { ContextProfile } from '../redux/profile';
import { ContextFavorite } from '../redux/favorite';
import {
	getFavorites,
	clearFavorites,
	markAsFavorites,
} from '../redux/actions/favoriteActions';

import FavoriteComponent from '../components/Favorite';


const Favorite = ({
	movieId,
	first = true,
}) => {
	const { authStore: { isLogin } } = useContext(ContextAuth);
	const { profileStore: { id: userId } } = useContext(ContextProfile);
	const { favoriteDispatch, favoriteStore } = useContext(ContextFavorite);
	const { fetched, isFetching, data } = favoriteStore;
	const [ isFavorite, setIsFavorite ] = useState(false);

	useEffect(
		() => {
			if (isLogin) {
				if (first && !fetched && !isFetching) {
					getFavorites(userId)(favoriteDispatch);
				}
			} else if (!isLogin && fetched) {
				favoriteDispatch(clearFavorites());
			}
		},
		[isLogin, favoriteDispatch]
	);

	useEffect(
		() => {
			if (data && data instanceof Set) {
				const fvr = data.has(movieId);
				setIsFavorite(data.has(movieId));
			} else {
				setIsFavorite(false);
			}
		},
		[data]
	);

	const handleToggleFavorite = (favorite, unblockFavorite) => {
		const callback = isSuccess => {
			if (isSuccess) {
				setIsFavorite(favorite);
			}
			if (unblockFavorite && typeof unblockFavorite === 'function') {
				unblockFavorite();
			}
		}
		markAsFavorites(userId, movieId, favorite, callback)(favoriteDispatch);
	};

	if (!isLogin) return (null);

	return (
		<FavoriteComponent
			isFavorite={isFavorite}
			handleToggleFavorite={handleToggleFavorite}
		/>
	);
};

export default Favorite;