import React from 'react'

const HeaderComponent = ({nav, actions}) => {
	return <header>
		<nav className={nav.headerColour}>
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left" onClick={() => {
					actions.showHomePage();
				}}>{nav.title}</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li className={nav.showAbout ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect" onClick={(e) => {
								e.preventDefault()
								actions.showAboutPage()
							}}>
								<b>About</b>
							</a>
						</div>
					</li>
					<li className={nav.showArticle ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-purple" onClick={(e) => {
								e.preventDefault()
								actions.showArticlePage()
							}}>
								<b>Articles</b>
							</a>
						</div>
					</li>
					<li className={nav.showTag ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-orange" onClick={(e) => {
								e.preventDefault()
								actions.showTagPage()
							}}>
								<b>Tags</b>
							</a>
						</div>
					</li>
					<li>
						<a href={nav.twitterURL}>
							<i className="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href={nav.instagramURL}>
							<i className="fa fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href={nav.soundcloudURL}>
							<i className="fa fa-soundcloud"></i>
						</a>
					</li>
					<li>
						<a href={nav.linkedinURL}>
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href={nav.githubURL}>
							<i className="fa fa-github"></i>
						</a>
					</li>
					<li>
						<a href={nav.emailURL}>
							<i className="fa fa-envelope"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
}

export default HeaderComponent
