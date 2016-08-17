import {combineReducers} from 'redux'

const reducers = {
	home: require('./home.jsx')
};
module.exports = combineReducers(reducers)