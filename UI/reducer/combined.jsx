import {combineReducers} from 'redux'
import { routeReducer } from 'redux-simple-router'

const reducers = {
	nav: require('./nav.jsx'),
	routing: routeReducer
};
module.exports = combineReducers(reducers)