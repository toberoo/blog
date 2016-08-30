import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import navActions from './../action/nav.jsx'

import Main from './../component/main.jsx'
import About from './../component/about.jsx'
import Prog from './../component/programming.jsx'
import Music from './../component/music.jsx'
import Ramblings from './../component/ramblings.jsx'
import FilmTVBooks from './../component/filmTVBooks.jsx'
import Games from './../component/games.jsx'

class RootContainer extends Component  {

	//Helper function to display the correct page
	getPage() {
		let state = this.props.nav
		switch(true) {
			case state.showAbout: return <About/>
			case state.showProg: return <Prog/>
			case state.showMusic: return <Music/>
			case state.showRamb: return <Ramblings/>
			case state.showFilmTVBooks: return <FilmTVBooks/>
			case state.showGames: return <Games/>
		}
	}

	render() {
		return <Main nav={this.props.nav} actions={this.props.navActions}>
			{this.getPage()}
		</Main>
	}
}

function mapStateToProps(state) {
	return {
		nav: state.nav,
		routing: state.routing.location
	}
}

function mapDispatchToProps(dispatch) {
	return {
		navActions: bindActionCreators(navActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
