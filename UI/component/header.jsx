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
				<div className="container">
					<div className="row center">
						<div className="col s4">1</div>
						<div className="col s4">2</div>
						<div className="col s4">3</div>
					</div>
				</div>
			</li>
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
			<li className={home.showLit ? 'active' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-yellow" onClick={() => {
						actions.showLitPage();
					}}>
						<b>Literature</b>
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
			<li className={home.showMovie ? 'active' : ''}>
				<div className="center-align hoverable">
					<a href="#" className="waves-effect waves-teal" onClick={() => {
						actions.showMoviePage();
					}}>
						<b>Movies</b>
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
						<b>Television</b>
					</a>
				</div>
			</li>
			<li className={home.showGame ? 'active' : ''}>
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