import React from 'react'

const HeaderComponent = ({home, actions}) => {

	return <header>
		<nav className={home.headerColour}>
			<div className="container">
				<a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only">
					<i className="material-icons">menu</i>
				</a>
			</div>
			<div className="nav-wrapper hide-on-small-only">
				<a href="#" className="brand-logo center">{home.title}</a>
			</div>
		</nav>
		<ul id="nav-mobile" className="side-nav fixed">
			<li className="section"></li>
			<li className="section"></li>
			<li className="input-field">
				<input id="search" type="search"/>
				<label><i className="material-icons">search</i></label>
				<i className="material-icons">close</i>
			</li>
			<li>
				<div className={home.headerColour != 'black' ? home.headerColour + ' card' : ' card'}>
					<div className="row center">
						<div className="col s3">
							<a href={home.twitterURL}>
								<i className="fa fa-twitter fa-2x"></i>
							</a>
						</div>
						<div className="col s3">
							<a href="http://google.com">
								<i className="fa fa-instagram fa-2x"></i>
							</a>
						</div>
						<div className="col s3">
							<a href={home.soundcloudURL}>
								<i className="fa fa-soundcloud fa-2x"></i>
							</a>
						</div>
						<div className="col s3">
							<a href="http://google.com">
								<i className="fa fa-linkedin fa-2x"></i>
							</a>
						</div>
					</div>
				</div>
			</li>
			<li className={home.showAbout ? 'card' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect" onClick={(e) => {
						e.preventDefault()
						actions.showAboutPage()
					}}>
						<b>About</b>
					</a>
				</div>
			</li>
			<li className={home.showLit ? 'card' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-yellow" onClick={() => {
						actions.showLitPage();
					}}>
						<b>Literature</b>
					</a>
				</div>
			</li>
			<li className={home.showProg ? 'card' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-purple" onClick={() => {
						actions.showProgPage();
					}}>
						<b>Programming</b>
					</a>
				</div>
			</li>
			<li className={home.showMovie ? 'card' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-teal" onClick={() => {
						actions.showMoviePage();
					}}>
						<b>Movies</b>
					</a>
				</div>
			</li>
			<li className={home.showMusic ? 'card' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-orange" onClick={() => {
						actions.showMusicPage();
					}}>
						<b>Music</b>
					</a>
				</div>
			</li>
			<li className={home.showRamb ? 'card' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-red" onClick={() => {
						actions.showRambPage();
					}}>
						<b>Ramblings</b>
					</a>
				</div>
			</li>
			<li className={home.showTV ? 'card' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-teal" onClick={() => {
						actions.showTVPage();
					}}>
						<b>Television</b>
					</a>
				</div>
			</li>
			<li className={home.showGame ? 'card' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-green" onClick={() => {
						actions.showGamePage();
					}}>
						<b>Video Games</b>
					</a>
				</div>
			</li>
		</ul>
	</header>
}

export default HeaderComponent
