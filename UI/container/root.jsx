import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import navActions from './../action/nav.jsx'

import Main from './../component/main.jsx'
import About from './../component/about.jsx'
import Articles from './../component/articleList.jsx'
import Tags from './../component/tagList.jsx'


class RootContainer extends Component  {

	//Helper function to display the correct page
	getPage() {
		let state = this.props.nav
		switch(true) {
			case state.showAbout: return <About/>
			case state.showArticle: return <Articles/>
			case state.showTag: return <Tags/>
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
