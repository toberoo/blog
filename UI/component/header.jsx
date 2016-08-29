import React from 'react'

const HeaderComponent = ({nav, actions}) => {
	return <header>
		<nav className={nav.headerColour}>
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left" onClick={() => {
					actions.showHomePage();
				}}>Kidtrocious</a>
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
					<li className={nav.showProg ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-purple" onClick={(e) => {
								e.preventDefault()
								actions.showProgPage()
							}}>
								<b>Programming</b>
							</a>
						</div>
					</li>
					<li className={nav.showMusic ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-orange" onClick={(e) => {
								e.preventDefault()
								actions.showMusicPage();
							}}>
								<b>Music</b>
							</a>
						</div>
					</li>
					<li className={nav.showRamb ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-red" onClick={(e) => {
								e.preventDefault()
								actions.showRambPage();
							}}>
								<b>Ramblings</b>
							</a>
						</div>
					</li>
					<li className={nav.showTV ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-teal" onClick={() => {
								actions.showTVPage();
							}}>
								<b>Film/TV</b>
							</a>
						</div>
					</li>
					<li className={nav.showGame ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-green" onClick={() => {
								actions.showGamePage();
							}}>
								<b>Games</b>
							</a>
						</div>
					</li>
					<li>
						<a href={nav.twitterURL}>
							<i className="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="http://google.com">
							<i className="fa fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href={nav.soundcloudURL}>
							<i className="fa fa-soundcloud"></i>
						</a>
					</li>
					<li>
						<a href="http://google.com">
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href="http://google.com">
							<i className="fa fa-github"></i>
						</a>
					</li>
					<li>
						<a href="http://google.com">
							<i className="fa fa-youtube"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
}
/*

					*/

export default HeaderComponent
