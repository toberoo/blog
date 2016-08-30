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

const showProgPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('programming'))
	}
}

const showMusicPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('music'))
	}
}

const showRambPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('ramblings'))
	}
}

const showFilmTVBooksPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('filmtvbooks'))
	}
}


const showGamePage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('games'))
	}
}

//Only actions called by the UI directly will be shown.
module.exports = {
	showAboutPage,
	showProgPage,
	showMusicPage,
	showRambPage,
	showFilmTVBooksPage,
	showGamePage,
	showHomePage
}