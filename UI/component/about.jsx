import React from 'react'
import cat from './../images/cat.jpg'
import me from './../images/me.jpg'

const about = () => {
	return <div className="row">
			<div className="col m8">
				<div className="card">
					<div className="card-content flow-text">
						<blockquote>
							Somewhere between my open source projects, my pages of novel planning, and my unfinished albums,
							I decided to create this website. What started as an excuse for me to meld React/Redux with Materialize
							became a little more. Another blog. Another website. Another joker spreading his nonsense into the world. Enjoy!
						</blockquote>
					</div>
				</div>
				<div className="card horizontal">
					<div className="card-image hide-on-small-only">
						<img className="circle" src={me}/>
					</div>
					<div className="card-content">
						<h5>Who is toberoo?</h5>
						<blockquote>
							Just an alias I came up many years ago based off a fictional character I made up in the fifth grade.
							A video game player, entrepreneur, and relic.
						</blockquote>
						<br/>
						<h5>Who is Kidtrocious?</h5>
						<blockquote>
							The musician.
						</blockquote>
						<br/>
						<h5>Who is Shehroze Khan?</h5>
						<blockquote>
							The programmer, the student, the one that's supposed to be a professional.
						</blockquote>
					</div>
				</div>
			</div>
			<div className="col m4">
				<div className="card">
		            <div className="card-image">
		              <img src={cat} style={{'max-width':'320px', 'max-height':'420px'}}/>
		            </div>
		            <div className="card-content">
		              <p>Maddie is my cat. She is hyper, playful, and a colossal jerk.</p>
		            </div>
				</div>
			</div>
		</div>
}

export default about
