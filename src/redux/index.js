import { combineReducers, createStore } from 'redux';

const allReducers = {
	movies: () => ({data: 0})
};

const reducer = combineReducers({
	...allReducers,
});

export default createStore(reducer);