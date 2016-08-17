import React, { Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePage from './../component/homePage.jsx'
import actions from './../action/actions.jsx'

class RootContainer extends Component  {
	render() {
		return <HomePage home={this.props.home} actions={this.props.actions}/>
	}
}

function mapStateToProps(state) {
	return {
		home: state.home
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
