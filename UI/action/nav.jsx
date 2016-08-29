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

const showLitPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('literature'))
		//dispatch(changeHeaderColour('amber lighten-2'))
		//dispatch(showPage(constants.PAGES.LIT))
	}
}

const showRambPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('ramblings'))
		//dispatch(changeHeaderColour('red'))
		//dispatch(showPage(constants.PAGES.RAMB))
	}
}

const showTVPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('filmtv'))
		//dispatch(changeHeaderColour('teal lighten-2'))
		//dispatch(showPage(constants.PAGES.TV))
	}
}

const showGamePage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('games'))
		//dispatch(changeHeaderColour(''))
		//dispatch(showPage(constants.PAGES.HOME))
	}
}

//Only actions called by the UI directly will be shown.
module.exports = {
	showAboutPage,
	showLitPage,
	showRambPage,
	showProgPage,
	showMusicPage,
	showTVPage,
	showGamePage,
	showHomePage
}