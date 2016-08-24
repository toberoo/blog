import { routeActions } from 'redux-simple-router'

const constants = require('./const.jsx')

const changeHeaderColour = (val) => {
	return {
		type: constants.CHANGE_HEADER_COLOUR,
		val
	}
}

const showPage = (val) => {
	return {
		type: constants.SHOW_PAGE,
		val
	}
}

const showAboutPage = () => {
	return (dispatch) => {
		dispatch(routeActions.push('about'))
		dispatch(loadAboutPage())
	}
}

const loadAboutPage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('yellow darken-1'))
		dispatch(showPage(constants.PAGES.ABOUT))
	}
}

const loadHomePage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour(''))
		dispatch(showPage(constants.PAGES.HOME))
	}
}

const showLitPage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('amber lighten-2'))
		dispatch(showPage(constants.PAGES.LIT))
	}
}

const showRambPage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('red'))
		dispatch(showPage(constants.PAGES.RAMB))
	}
}

const showProgPage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('purple lighten-2'))
		dispatch(showPage(constants.PAGES.PROG))
	}
}

const showMusicPage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('orange lighten-2'))
		dispatch(showPage(constants.PAGES.MUSIC))
	}
}

const showTVPage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('teal lighten-2'))
		dispatch(showPage(constants.PAGES.TV))
	}
}

const showGamePage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour(''))
		dispatch(showPage(constants.PAGES.HOME))
	}
}

//Only actions called by the UI directly will be shown.
module.exports = {
	changeHeaderColour,
	showAboutPage,
	showLitPage,
	showRambPage,
	showProgPage,
	showMusicPage,
	showTVPage,
	showGamePage,
	loadHomePage
}