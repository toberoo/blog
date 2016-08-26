import constants from './../action/const.jsx'

const initialState = {
	title: 'K I D T R O C I O U S',
	headerColour: '',
	twitterURL: 'http://twitter.com/kidtrocious',
	instagramURL: 'https://www.instagram.com/kidtrocious',
	soundcloudURL: 'http://soundcloud.com/kidtrocious',
	linkedinURL: 'https://www.linkedin.com/in/shehroze-khan-a2884669',
	githubURL: 'https://github.com/toberoo',
	emailURL: 'mailto:toberoo@gmail.com',
	showHome: true
}

function getVisiblePage(state, selected) {
	return Object.assign({}, state, {
		showHome: selected === constants.PAGES.HOME ? true : false,
		showAbout: selected === constants.PAGES.ABOUT ? true: false,
		showLit: selected === constants.PAGES.LIT ? true: false,
		showRamb: selected === constants.PAGES.RAMB ? true: false,
		showProg: selected === constants.PAGES.PROG ? true: false,
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