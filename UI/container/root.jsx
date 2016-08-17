import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './../action/actions.jsx'

class RootContainer extends Component  {
	render() {
		return <h1>{this.props.home.title}</h1>
	}
}

function mapStateToProps(state) {
	console.log(state);
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