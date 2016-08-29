//import constants from './../action/const.jsx'
import { UPDATE_LOCATION } from 'redux-simple-router'

const initialState = {
	title: 'K I D T R O C I O U S',
	headerColour: '',
	twitterURL: 'http://twitter.com/kidtrocious',
	soundcloudURL: 'http://soundcloud.com/kidtrocious',
	showHome: true
}

const reset = {
	headerColour: '',
	showAbout: false,
	showProg: false,
	showMusic: false,
	showRamb: false
}

module.exports = function(state = initialState, action) {
	switch(action.type) {

		case UPDATE_LOCATION: {
			let path = action.payload.pathname;
			let newState = Object.assign({}, state, {
				showAbout: false,
				showProg: false
			})

			switch(path) {

				case '/': {
					return Object.assign({}, newState, reset)
				}

				case '/about': {
					return Object.assign({}, newState, {
						headerColour: 'yellow darken-1',
						showAbout: true
					})
				}

				case '/programming': {
					return Object.assign({}, newState, {
						headerColour: 'purple lighten-2',
						showProg: true
					})
				}

				case '/music': {
					return Object.assign({}, newState, {
						headerColour: 'orange lighten-2',
						showMusic: true
					})
				}

				case '/ramblings': {
					return Object.assign({}, newState, {
						headerColour: 'orange lighten-2',
						showMusic: true
					})
				}

				default: {
					return state
				}
			}
		}

		default: {
			return state;
		}
	}
}