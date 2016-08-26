import React from 'react'

const HeaderComponent = ({home, actions}) => {

	return <header>
		<nav className={home.headerColour}>
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left" onClick={() => {
					actions.loadHomePage();
				}}>Kidtrocious</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li className={home.showAbout ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect" onClick={(e) => {
								e.preventDefault()
								actions.showAboutPage()
							}}>
								<b>About</b>
							</a>
						</div>
					</li>
					<li className={home.showProg ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-purple" onClick={() => {
								actions.showProgPage();
							}}>
								<b>Programming</b>
							</a>
						</div>
					</li>
					<li className={home.showMusic ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-orange" onClick={() => {
								actions.showMusicPage();
							}}>
								<b>Music</b>
							</a>
						</div>
					</li>
					<li className={home.showRamb ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-red" onClick={() => {
								actions.showRambPage();
							}}>
								<b>Ramblings</b>
							</a>
						</div>
					</li>
					<li className={home.showTV ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-teal" onClick={() => {
								actions.showTVPage();
							}}>
								<b>Film/TV</b>
							</a>
						</div>
					</li>
					<li className={home.showGame ? 'active' : ''}>
						<div className="center-align hoverable">
							<a href="#" className="waves-effect waves-green" onClick={() => {
								actions.showGamePage();
							}}>
								<b>Games</b>
							</a>
						</div>
					</li>
					<li>
						<a href={home.twitterURL}>
							<i className="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href={home.instagramURL}>
							<i className="fa fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href={home.soundcloudURL}>
							<i className="fa fa-soundcloud"></i>
						</a>
					</li>
					<li>
						<a href={home.linkedinURL}>
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href={home.githubURL}>
							<i className="fa fa-github"></i>
						</a>
					</li>
					<li>
						<a href={home.emailURL}>
							<i className="fa fa-envelope"></i>
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
