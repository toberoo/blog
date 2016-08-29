import React from 'react'
import Header from './header.jsx'

const main = ({nav, actions, children}) => {
	return <div className="main">
			<Header nav={nav} actions={actions}/>
			<div className="container">
				{children}
			</div>
		</div>
}

export default main
