//import constants from './../action/const.jsx'
import { UPDATE_LOCATION } from 'redux-simple-router'

const initialState = {
	title: 'Why Do People Like ... ?',
	headerColour: '',
	twitterURL: 'http://twitter.com/kidtrocious',
	soundcloudURL: 'http://soundcloud.com/kidtrocious',
	showHome: true
}

const resetState = {
	headerColour: '',
	showAbout: false,
	showArticle: false,
	showTag: false
}

module.exports = function(state = initialState, action) {
	switch(action.type) {

		case UPDATE_LOCATION: {
			let path = action.payload.pathname;
			let newState = Object.assign({}, state, resetState)

			switch(path) {

				case '/': {
					return Object.assign({}, newState, newState)
				}

				case '/about': {
					return Object.assign({}, newState, {
						headerColour: 'yellow darken-1',
						showAbout: true
					})
				}

				case '/article': {
					return Object.assign({}, newState, {
						headerColour: 'red',
						showArticle: true
					})
				}

				case '/tag': {
					return Object.assign({}, newState, {
						headerColour: 'teal lighten-2',
						showTag: true
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