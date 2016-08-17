//Get react stuff
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.jsx'

require('./index.html')

//Get the root container
import Root from './container/root.jsx'

render(
  <Provider store={store}>
 	<Root/>
  </Provider>,
  document.getElementById('root')
)