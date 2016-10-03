import { routeActions } from 'redux-simple-router'
//const constants = require('./const.jsx')

const showHomePage = () => {
	return (dispatch) => {
		dispatch(routeActions.push(''))
	}
}

const showAboutPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('about'))
	}
}

const showArticlePage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('article'))
	}
}

const showTagPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('tag'))
	}
}

//Only actions called by the UI directly will be shown.
module.exports = {
	showAboutPage,
	showArticlePage,
	showTagPage,
	showHomePage
}
