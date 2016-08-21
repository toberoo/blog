import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combinedReducer from './reducer/combined.jsx'
import { hashHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'

const reduxRouterMiddleware = syncHistory(hashHistory)
const store = createStore(
	combinedReducer, {}, applyMiddleware(
		thunkMiddleware,
		reduxRouterMiddleware
	)
)
reduxRouterMiddleware.listenForReplays(store)

export default store
