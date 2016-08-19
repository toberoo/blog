import {combineReducers} from 'redux'
import { routeReducer } from 'redux-simple-router'

const reducers = {
	home: require('./home.jsx'),
	routing: routeReducer
};
module.exports = combineReducers(reducers)