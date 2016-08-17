import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combinedReducer from './reducer/combined.jsx'

export default createStore(
	combinedReducer, {}, applyMiddleware(
		thunkMiddleware
	)
)
