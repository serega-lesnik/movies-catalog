import { combineReducers, createStore } from 'redux';
import movies from './movies';
import genres from './genres';

const allReducers = {
	movies,
	genres,
};

const reducer = combineReducers({
	...allReducers,
});

export default createStore(reducer);