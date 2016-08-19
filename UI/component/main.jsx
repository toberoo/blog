import React from 'react'
import Header from './header.jsx'

const main = ({home, actions, children = undefined}) => {
	return <div className="main">
			<Header home={home} actions={actions} />
			<div className="container">
				{children}
			</div>
		</div>
}

export default main
