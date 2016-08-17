import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combinedReducer from './reducer/combined.jsx'

export default function configureStore(initialState) {
  return createStore(
    combinedReducer,
   	initialState,
    applyMiddleware(thunkMiddleware)
  )
}