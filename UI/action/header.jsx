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
		dispatch(changeHeaderColour('black'))
		dispatch(showPage(constants.PAGES.ABOUT))
		dispatch(routeActions.push('/'))
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
		dispatch(changeHeaderColour('red lighten-2'))
		dispatch(showPage(constants.PAGES.RAMB))
	}
}

const showProgPage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('purple lighten-2'))
		dispatch(showPage(constants.PAGES.PROG))
	}
}

const showMoviePage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('teal lighten-2'))
		dispatch(showPage(constants.PAGES.MOVIE))
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
		dispatch(changeHeaderColour('teal lighten-4'))
		dispatch(showPage(constants.PAGES.TV))
	}
}

const showGamePage = () => {
	return (dispatch) => {
		dispatch(changeHeaderColour('green lighten-2'))
		dispatch(showPage(constants.PAGES.GAME))
	}
}

//Only actions called by the UI directly will be shown.
module.exports = {
	changeHeaderColour,
	showAboutPage,
	showLitPage,
	showRambPage,
	showProgPage,
	showMoviePage,
	showMusicPage,
	showTVPage,
	showGamePage
}