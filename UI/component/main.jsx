import React from 'react'
import Header from './header.jsx'

const main = ({nav, actions, children}) => {
	return <div className="main">
			<div>
				<Header nav={nav} actions={actions}/>
			</div>
			<div className="container">
				{children}
			</div>
		</div>
}

export default main
