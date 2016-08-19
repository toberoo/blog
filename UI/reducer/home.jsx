import constants from './../action/const.jsx'

const initialState = {
	title: 'K I D T R O C I O U S',
	headerColour: 'black'
}

function getVisiblePage(state, selected) {
	return Object.assign({}, state, {
		showAbout: selected === constants.PAGES.ABOUT ? true: false,
		showLit: selected === constants.PAGES.LIT ? true: false,
		showRamb: selected === constants.PAGES.RAMB ? true: false,
		showProg: selected === constants.PAGES.PROG ? true: false,
		showMovie: selected === constants.PAGES.MOVIE ? true: false,
		showMusic: selected === constants.PAGES.MUSIC ? true: false,
		showTV: selected === constants.PAGES.TV ? true: false,
		showGame: selected === constants.PAGES.GAME ? true: false
	})
}

module.exports = function(state = initialState, action) {
	switch(action.type) {
		
		case constants.CHANGE_HEADER_COLOUR: {
			return Object.assign({}, state, {
				headerColour: action.val
			})
		}

		case constants.SHOW_PAGE: {
			return getVisiblePage(state, action.val);
		}

		default: {
			return state;
		}
	}
}