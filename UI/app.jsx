//Get react stuff
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.jsx'

//Load the home html
require('./index.html')

//Get the router stuff
import { Router, Route, hashHistory } from 'react-router'

//Get the root container
import Root from './container/root.jsx'

render(
  <Provider store={store}>
      <Router history={hashHistory}>
        	<Route path="/" component={Root}>
        		<Route path="/about"/>
        		<Route path="/programming"/>
        		<Route path="/music"/>
        	</Route>
      </Router>
  </Provider>,
  document.getElementById('root')
)
