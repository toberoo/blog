import React, { Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './../component/main.jsx'
import actions from './../action/actions.jsx'

class RootContainer extends Component  {
	render() {
		return <Main home={this.props.home} actions={this.props.actions}>
		</Main>
	}
}

function mapStateToProps(state) {
	return {
		home: state.home,
		routing: state.routing
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
