import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import navActions from './../action/nav.jsx'

import Main from './../component/main.jsx'
import About from './../component/about.jsx'
import Prog from './../component/programming.jsx'
import Music from './../component/music.jsx'

class RootContainer extends Component  {

	//Helper function to display the correct page
	getPage() {
		let state = this.props.nav
		if (state.showAbout)
			return <About/>
		if (state.showProg)
			return <Prog/>
		if (state.showMusic)
			return <Music/>
	}

	render() {
		return <Main nav={this.props.nav} actions={this.props.navActions}>
			{this.getPage()}
		</Main>
	}
}

function mapStateToProps(state) {
	return {
		nav: state.nav
	}
}

function mapDispatchToProps(dispatch) {
	return {
		navActions: bindActionCreators(navActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
